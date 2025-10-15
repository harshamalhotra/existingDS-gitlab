#!/usr/bin/env node

const PROJECT_ID = '62039593';
const GITLAB_API_BASE = 'https://gitlab.com/api/v4';
const POLL_INTERVAL = 30000; // 30 seconds
const MAX_WAIT_TIME = 30 * 60 * 1000; // 30 minutes

function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

async function triggerPipeline() {
  log('Triggering duo-ui pipeline...');

  const formData = new FormData();
  formData.append('token', process.env.DUO_UI_PIPELINE_TRIGGER_TOKEN);
  formData.append('ref', 'main');
  formData.append('variables[UPSTREAM_GITLAB_UI_VERSION]', process.env.DEPENDENCY_URL);
  formData.append(
    'variables[UPSTREAM_BRANCH_NAME]',
    process.env.CI_MERGE_REQUEST_SOURCE_BRANCH_NAME,
  );

  try {
    const response = await fetch(`${GITLAB_API_BASE}/projects/${PROJECT_ID}/trigger/pipeline`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }

    const pipelineData = await response.json();

    if (pipelineData.id) {
      log(
        `Pipeline triggered successfully. Pipeline ID: ${pipelineData.id}, web_url: ${pipelineData.web_url}`,
      );
      return pipelineData.id;
    }
    throw new Error(`Failed to trigger pipeline: ${JSON.stringify(pipelineData)}`);
  } catch (error) {
    log(`Error triggering pipeline: ${error.message}`);
    process.exitCode = 1;
    return null;
  }
}

async function getPipelineStatus(pipelineId) {
  try {
    const response = await fetch(
      `${GITLAB_API_BASE}/projects/${PROJECT_ID}/pipelines/${pipelineId}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }

    const pipelineData = await response.json();
    return pipelineData.status;
  } catch (error) {
    log(`Error getting pipeline status: ${error.message}`);
    return null;
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function pollPipelineStatus(pipelineId, startTime) {
  if (Date.now() - startTime > MAX_WAIT_TIME) {
    log('Pipeline polling timed out after 30 minutes');
    return false;
  }

  const status = await getPipelineStatus(pipelineId);

  if (status === null) {
    log('Failed to get pipeline status, retrying...');
  } else {
    log(`Pipeline status: ${status}`);

    if (status === 'success') {
      log('Pipeline completed successfully!');
      return true;
    }
    if (['failed', 'canceled', 'skipped'].includes(status)) {
      log(`Pipeline failed with status: ${status}`);
      return false;
    }
    if (!['pending', 'running', 'created'].includes(status)) {
      log(`Unknown pipeline status: ${status}`);
      return false;
    }
  }

  await sleep(POLL_INTERVAL);
  return pollPipelineStatus(pipelineId, startTime);
}

async function waitForPipelineCompletion(pipelineId) {
  log(`Waiting for pipeline ${pipelineId} to complete...`);
  return pollPipelineStatus(pipelineId, Date.now());
}

async function main() {
  try {
    const pipelineId = await triggerPipeline();

    if (pipelineId === null) {
      log('Failed to trigger pipeline, exiting...');
      process.exitCode = 1;
      return;
    }

    const success = await waitForPipelineCompletion(pipelineId);

    if (success) {
      log('Duo UI pipeline completed successfully!');
      process.exitCode = 0;
    } else {
      log('Duo UI pipeline failed!');
      process.exitCode = 1;
    }
  } catch (error) {
    log(`Unexpected error: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
