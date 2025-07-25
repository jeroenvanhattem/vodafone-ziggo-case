# VodafoneZiggo case for quotes app

## How to run

Make sure you have [bun](https://bun.sh) installed, as I use this as node environment. Install the packages using `bun install` in both `/app` and `/api`. Also install the iOS pods (if running on iPhone) with `bun pod` in `/app`.
Fill in the .env in `/api` with your own QOTF API key.

Start the backend by running `docker compose up -d` and `bun run start:dev`. Then for the front end you run both `bun start` and `bun ios`.

## How would I improve this if I had more time

If it'd be a bigger project, I'd make a couple of adjustments.

1. I'd add `swagger` to the backend to create OpenAPI documentation. Then using `orval`, I'd generate the React hooks. Significant overkill for now, but it'd be nice to auto generate.
2. Make the database persistent. Now it doesn't have a volume attached in the Docker container.
3. Make some pretty animations. It's currently all very abrupt.
4. Make a pretty component for the flatlist that already contains the scroll to top button and logic instead of having to reuse it.

## A few choices explained

### Why NestJS?

I never tried NestJS, but I've wanted to learn it for a while now. Since the job application mentioned NestJS, I figured this was the perfect time to learn it. Normally I'd make this with a simple Express backend, but I decided to take this as a learning opportunity to learn a new framework. And who would want to skip out on an opportunity to learn something new?

### Why a database?

I was going to need a backend anyway. There's a few ways of persisting state on the backend. I think the most logical option was a database. Using json or csv files seems very cumbersome.
