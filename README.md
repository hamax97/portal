# Portal
The gateway to all my other side projects.

# Deploy

Any pushes to the `main` branch will trigger an automatic deploy from Heroku.

# GraphQL Server

Server deployed at: `https://pp-portal.herokuapp.com/graphql`.

# Workspace (in progress)

TODOs:

- Learn how gRPC works and implement it in ascii-art.

- CURL command to send image:

```
curl localhost:3000/graphql \
        -F operations='[{"query":"query Query($image: Upload!) { asciiImage(image: $image) }","variables": { "image": null } }]' \
        -F map='{ "0": ["0.variables.image"] }' \
        -F 0=@mario-bros.jpg \
        -H "Apollo-Require-Preflight: true"
```

How to get the value inside data.asciiImage using jq?

# Deployment

Test locally:

heroku local web

Deploy:

git push heroku main

