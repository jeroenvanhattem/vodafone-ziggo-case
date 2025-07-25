# VodafoneZiggo case for quotes app

## How to run

Make sure you have [bun](https://bun.sh) installed, as I use this as node environment. Install the packages using `bun install` in both `/app` and `/api`. Also install the iOS pods (if running on iPhone) with `bun pod` in `/app`.
Fill in the .env in `/api` with your own QOTF API key.

Start the backend by running `docker compose up -d` and `bun run start:dev`. Then for the front end you run both `bun start` and `bun ios`.

There are 2 kind of frontend tests. One is E2E using Detox, other one is Jest for logic.

1. Run the E2E with these commands

- `detox build --configuration ios.sim.debug` to build the project.
- `detox test --configuration ios.sim.debug` to run the E2E test.

2. Run the Jest tests with `bun run test`

## What did I implement

I created a quotes app using React Native in the frontend and Nestjs in the backend.

In the frontend, we have 3 screens. Home, favorites and search.

- Home shows a random quote with underneath an infinitely scrollable list of quotes. On top there's a switch to change themes.
- Favorites shows all your liked quotes, sorted on most recent.
- Search has a search input that searches with a small bounce time to not spam search calls. Then there's a list of quotes.

In the backend we have a Nestjs server. It is accompanied by a PostgreSQL database which stores the liked quotes. I use Knex for making a migration to incrementally build the database and Prisma as ORM to interact with the database. There are seperate controllers for the `/quotes` and `/favorites` endpoints. `Favorites` also has a repository to talk to the database. The `favq` module is used to talk to the favq API.

## How would I improve this if I had more time

If it'd be a bigger project, I'd make a couple of adjustments.

1. I'd add `swagger` to the backend to create OpenAPI documentation. Then using `orval`, I'd generate the React hooks. Significant overkill for now, but it'd be nice to auto generate.
2. Make the database persistent. Now it doesn't have a volume attached in the Docker container.
3. Make some pretty animations. It's currently all very abrupt.
4. Make a pretty component for the flatlist that already contains the scroll to top button and logic instead of having to reuse it.
5. Add pagination to the search. It currently shows 25 results. Could apply the same logic as on the home page with the infinite scroll.
6. Create a better feedback system then just redirecting the user to the `Favorites` page. Probably something like toasts or animating the heart icon to glow up.
7. Make a prettier design. Probably with some accents colors. Something that is actually thought out. It's all very, very basic at the moment.
8. Add a splash screen and an icon.
9. Change the app name. It's currently the default React Native name.
10. Add Detox to have E2E tests

## A few choices explained

### Why NestJS?

I never tried NestJS, but I've wanted to learn it for a while now. Since the job application mentioned NestJS, I figured this was the perfect time to learn it. Normally I'd make this with a simple Express backend, but I decided to take this as a learning opportunity to learn a new framework. And who would want to skip out on an opportunity to learn something new?

### Why a database?

I was going to need a backend anyway. There's a few ways of persisting state on the backend. I think the most logical option was a database. Using json or csv files seems very cumbersome.
