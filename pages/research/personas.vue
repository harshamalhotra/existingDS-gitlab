<template>
  <div class="personas content limited m-t-7 m-b-7">
    <div class="md">
      <h1>Personas</h1>
      <p>Personas are a generalized way of talking about the ideal target we are aiming to communicate with and design for. They help us not only define our messaging and marketing delivery, but also our product. Keeping personas in mind allows us to use the correct language and make the best decisions to address their specific problems and pain points. GitLab has both <a href="#buyer-personas">buyer</a> and <a href="#user-personas">user</a> persona types.</p>
      <h2 id="buyer-personas">Buyer personas</h2>
      <p>Buyer personas are the people who serve as the main buyer in an organization or a champion within an enterprise the drives the buying conversation and coordinates various teams to make a purchase.</p>
      <ul>
        <li>Director DevOps <a href="https://www.youtube.com/watch?v=qyELotxsQzY" target="_blank">video</a> , Director DevOps <a href="https://docs.google.com/presentation/d/1x-XUhAXkZxl8ZGe4ze9qcWMmrWITc7es1fYNY_OHQQA/" target="_blank">slide deck</a> or Director of IT
        <li>VP IT <a href="https://www.youtube.com/watch?v=LUh5eevH3F4" target="_blank">video</a>, VP IT <a href="https://docs.google.com/presentation/d/17Ucpgxzt1jSCs83ER4-LdDyEuermpDuriugPNYrz8Rg/" target="_blank">slide deck</a> or VP of Engineering</li>
        <li>Chief Architect <a href="https://www.youtube.com/watch?v=qyELotxsQzY" target="_blank">video</a>, Chief Architect <a href="https://docs.google.com/presentation/d/1KXsozYkimSLlEg3N-sKeN7Muatz_4XimYp-s7_dY1ZM/" target="_blank">slide deck</a> or CIO</li>
        <li>Chief Information Security Officer or Director of Security (may fund Ultimate upgrade for security capabilities)</li>
      </ul>
      <p>Also see the <a href="https://about.gitlab.com/handbook/ceo/pricing/#four-tiers" target="_blank">four tiers on our pricing page.</a></p>

      <h2 id="user-personas">User personas</h2>
      <div class="m-b-6">
        <h3>Dev</h3>
        <ul>
          <li><a href="#persona-parker">Parker</a>, Product Manager</li>
          <li><a href="#persona-delaney">Delaney</a>, Development Team Lead</li>
          <li><a href="#persona-sasha">Sasha</a>, Software Developer</li>
        </ul>
        <h3>Ops</h3>
        <ul>
          <li><a href="#persona-devon">Devon</a>, DevOps Engineer</li>
          <li><a href="#persona-sidney">Sidney</a>, Systems Administrator</li>
          <li><a href="#persona-sam">Sam</a>, Security Analyst</li>
        </ul>
      </div>
      <div 
        id="persona-parker" 
        class="persona card m-b-8"
      >
        <div class="card--header">
          <h2>Parker</h2>
        </div>
        <div class="card--body md">
          <table class="m-b-6">
            <tbody>
              <tr>
                <th class="header">Job Title:</th>
                <td>Product Manager</td>
              </tr>
              <tr>
                <th class="header">Alternative Job Titles:</th>
                <td>Program Manager, Project Manager, Technical Product Manager, Head of Product</td>
              </tr>
            </tbody>
          </table>
          <h3>Job Summary</h3>
          <p>I am responsible for defining and scoping features, incorporating company objectives into the product roadmap, and giving developers and designers the requirements they need to deliver strong features. Whether I’m making sure I have the right skill-sets on the team, prioritizing feature requests, or ensuring that we deliver on time, my job is to set my team up for success.</p>
          <h3>Motivations</h3>
          <ul>
            <li>When company objectives shift, I want to have a standard process for communication in place, so that I can be in sync with all team members.</li>
            <li>When development begins, I want to see an overview of all the relevant information related to a feature or project, so that I can monitor progress throughout a cycle.</li>
            <li>When I’m planning for the next cycle, I want to see a history of how accurately the developers on my team estimated their capacity, so that I can be sure that key features will be delivered on time.</li>
          </ul>
          <h3>Frustrations</h3>
          <ul>
            <li>It can be difficult to know the status of certain requirements, when my team members do not take the time to update the various tools we use.</li>
            <li>I often have trouble balancing feature requests with capacity.</li>
            <li>It can be difficult to give clients a reasonable timeframe that is not off-base, since a cycle is often unpredictable.</li>
            <li>It’s challenging to explain why certain features have been delayed or deprioritized, when customers and upper-level management are not working closely with the team.</li>
          </ul>
        </div>
      </div>
      <div 
        id="persona-delaney" 
        class="persona card m-b-8"
      >
        <div class="card--header">
          <h2>Delaney</h2>
        </div>
        <div class="card--body md">
          <table class="m-b-6">
            <tbody>
              <tr>
                <th class="header">Job Title:</th>
                <td>Development Team Lead</td>
              </tr>
              <tr>
                <th class="header">Alternative Job Titles:</th>
                <td>Technical Manager, Software Engineering Team Lead, Technical Team Lead, Software Development Director, Development Lead</td>
              </tr>
            </tbody>
          </table>
          <h3>Job Summary</h3>
          <p>I am responsible for meeting with the product management team to discuss and schedule features, so we can convert concepts into practical solutions. I ensure that capacity is properly estimated, create program specifications, and often mentor junior developers.</p>
          <h3>Motivations</h3>
          <ul>
            <li>When discussing feature requests, I want to receive clear requirements from the product and design teams, so my team can deliver on time and reduce back-and-forth communication.</li>
            <li>When assessing team resources, I want to see a history of how accurately developers on my team have estimated their capacity, so that I can assign them to the right tasks.</li>
            <li>When important deadlines are approaching, I want all team members to reliably update our tools, so that I can track progress without having to search for relevant information in other communication channels.</li>
          </ul>
          <h3>Frustrations</h3>
          <ul>
            <li>It can be difficult for my team to do thorough code reviews in a reasonable timeframe, while still making progress on their own assignments.</li>
            <li>When demand surpasses our current capacity, it can be stressful to resolve issues while not creating new ones that result from hasty work.</li>
            <li>I am not always aware of the best way to explain technical limitations to stakeholders who are not involved in the development process.</li>
          </ul>
        </div>
      </div>
      <div 
        id="persona-devon" 
        class="persona card m-b-8"
      >
        <div class="card--header">
          <h2>Devon</h2>
        </div>
        <div class="card--body md">
          <table class="m-b-6">
            <tbody>
              <tr>
                <th class="header">Job Title:</th>
                <td>DevOps Engineer</td>
              </tr>
              <tr>
                <th class="header">Alternative Job Titles:</th>
                <td>Application Developer, Operations Engineer, Systems Engineer, IT Consultant</td>
              </tr>
            </tbody>
          </table>
          <h3>Job Summary</h3>
          <p>I provide support for our infrastructure, environments, and integrations. I split my time between coding to implement features and bug fixes, and helping developers deploy, build, and release as efficiently as possible. </p>
          <h3>Motivations</h3>
          <ul>
            <li>When developers plan a project that requires my support, I want to be notified, so I can avoid unnecessary reactive work.</li>
            <li>When I resolve problems, I want to be able to track impact and other important success metrics, so I can raise my profile in the organization.</li>
            <li>When I create a solution for developers, I want to see it being used, so I know that my contributions are reliable and valued.</li>
            <li>When I’m facing a new or novel challenge, I want to whiteboard it with a teammate, so I have the satisfaction of helping solve a problem that has no manual.</li>
            <li>When I’m advocating for a new process or tool, I want to point to a metric or test, so I can support my case with something objective.</li>
          </ul>
          <h3>Frustrations</h3>
          <ul>
            <li>It is hard for me to quantify my efforts and convince others of time that will be saved in the future by investing time in proactive tasks in the present.</li>
            <li>I'm frustrated by the avoidable crises, caused by a lack of communication, that derail my work and burn up my resources.</li>
            <li>I dislike frequent context-switching and being responsible for some tasks that I feel I am not good at, because of the many hats my job requires me to wear.</li>
            <li>I'm frustrated by the politics of convincing people to adopt my recommendations.</li>
          </ul>
        </div>
      </div>
      <div 
        id="persona-sasha" 
        class="persona card m-b-8"
      >
        <div class="card--header">
          <h2>Sasha</h2>
        </div>
        <div class="card--body md">
          <table class="m-b-6">
            <tbody>
              <tr>
                <th class="header">Job Title:</th>
                <td>Software Developer</td>
              </tr>
              <tr>
                <th class="header">Alternative Job Titles:</th>
                <td>Software Engineer, Application Developer, Digital Solutions Developer, Consultant, Database Developer, Mobile Developer</td>
              </tr>
            </tbody>
          </table>
          <h3>Job Summary</h3>
          <p>I spend the majority of my time focused on completing planned development tasks, with roughly 30-40% of time taken by meetings, planning for the next sprint, and fixing bugs or customer requests as they arise. I work off of JIRA tickets and have a regular stand-up with my team.</p>
          <h3>Motivations</h3>
          <ul>
            <li>When I’m planning work, I want to have better communication between stakeholders, so I can deliver something they really need and use.</li>
            <li>When I’m on-call, I want to be the expert on some part of the system, so I know that I’m a valuable part of the team.</li>
            <li>When collaborating with a large number of developers, I want to see a record of everyone’s changes, so we can pinpoint and unwind mistakes.</li>
            <li>When I’m pairing with my teammates, I want to learn new tools and skills, so I can keep growing in my career. </li>
          </ul>
          <h3>Frustrations</h3>
          <ul>
            <li>I’m frustrated when requirements change after work has already begun on a project.</li>
            <li>I’m frustrated when work is inaccurately scoped, because it causes stress and eats into time planned for other work.</li>
            <li>I’m frustrated when I come across brittle code and something that should be an easy fix requires a lot of rework.</li>
            <li>I’m concerned that by taking longer than expected on a task I may be judged or seen as blocking others’ work.</li>
          </ul>
        </div>
      </div>
      <div 
        id="persona-sidney" 
        class="persona card m-b-8"
      >
        <div class="card--header">
          <h2>Sidney</h2>
        </div>
        <div class="card--body md">
          <table class="m-b-6">
            <tbody>
              <tr>
                <th class="header">Job Title:</th>
                <td>Systems Administrator</td>
              </tr>
              <tr>
                <th class="header">Alternative Job Titles:</th>
                <td>Systems Engineer, Database Administrator, Infrastructure Engineer, Site Availability Engineer, Site Reliability Engineer</td>
              </tr>
            </tbody>
          </table>
          <h3>Job Summary</h3>
          <p>I maintain and scale our infrastructure and configurations, and my priority is to automate as much as possible. When needed, I also build servers and help developers deploy to them.</p>
          <h3>Motivations</h3>
          <ul>
            <li>When I get asked for help multiple times on the same task, I want to automate that task, to save time and avoid mistakes in the future.</li>
            <li>When I’m on-call, I want to receive tiered notifications, so that the true emergencies don’t get lost in the noise.</li>
            <li>When I’m releasing an improvement, I want no one to notice, so I know that it has gone smoothly.</li>
          </ul>
          <h3>Frustrations</h3>
          <ul>
            <li>I'm frustrated by the large volume of reactive work that I face.</li>
            <li>I'm frustrated by the number of channels (email, Skype, SMS, Slack, pager) on which I receive on-call notifications.</li>
            <li>I'm frustrated when I get inundated by requests from people who have not followed the correct process.</li>
            <li>I'm frustrated when developers do not implement my recommendations, and I’m responsible for fixing their preventable problems anyway.</li>
          </ul>
        </div>
      </div>
      <div 
        id="persona-sam" 
        class="persona card m-b-8"
      >
        <div class="card--header">
          <h2>Sam</h2>
        </div>
        <div class="card--body md">
          <table class="m-b-6">
            <tbody>
              <tr>
                <th class="header">Job Title:</th>
                <td>Security Analyst</td>
              </tr>
              <tr>
                <th class="header">Alternative Job Titles:</th>
                <td>Security Engineer, Security Consultant, or an Application Security Specialist</td>
              </tr>
            </tbody>
          </table>
          <h3>Job Summary</h3>
          <p>I wear lots of hats, but the majority of my time is spent monitoring and flagging events, running down high priority tasks and working with other teams to implement new systems.</p>
          <h3>Motivations</h3>
          <ul>
            <li>When I’m monitoring my dashboards, I want to see everything I am monitoring in one tool, so I can do my job easier and more efficiently.</li>
            <li>When security testing, I want to be more proactive than reactive, so I can anticipate potential threats or vulnerabilities before the bad guys do.</li>
            <li>When on the job, I want to stay up to date on the latest information and education in information security, so I can grow in my career.</li>
          </ul>
          <h3>Frustrations</h3>
          <ul>
            <li>I’m frustrated I don’t have the resources to complete this project to its specifications.</li>
            <li>I’m frustrated when I know how to fix a security issue but the red tape at my company doesn’t allow me to in a timely manner.</li>
            <li>I’m concerned that what I don’t know, I don’t know and my company can be attacked in any manner of ways at any time.</li>
            <li>I’m concerned that I might miss something and my company may become compromised because of it.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
