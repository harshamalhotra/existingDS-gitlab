#!/bin/bash
# Temporary setup to get application.css from dev.gitlab.org

curl $(curl https://dev.gitlab.org/users/sign_in | sed -n 's/.*href="\/assets\/application/https:\/\/dev.gitlab.org\/assets\/application/p' | sed 's/".*//') > static/application.css
