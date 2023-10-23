<p align="center">
  <a href="" rel="" target="_blank"><img width="150" src="./src/assets/ecoquestlogo.png" alt="SquadMate Logo"></a></p>
</p>

<h1 align="center">EcoQuest</h1>
<h2 align="center">Your Planet, Your Quest</h2>
</div>

 <p>EcoQuest is the beginning of the vision to empower individuals with tangible, impactful actions they can take to reduce their carbon footprint. Rather than inundating users with impractical solutions or urging them to perform actions that may be out of their control, EcoQuest focuses on the power of accessible, achievable change.</p></br>
<p>But EcoQuest doesn't stop at individual action. One of its most compelling features is the ability to uncover the truth about major polluting facilities in your area. By providing access to crucial information, the app empowers users to become advocates for change in their communities and hold big businesses accountable for their environmental impact.</p>

 
## Demo
**[EcoQuestDemo](WEB ADDRESS TO DEMO HERE)**
<p align="center">
<img src="SCREENSHOT HERE" alt="EcoQuest Demo"></a>
</p>

## Features
- Register, Sign In, Log Out
- User and Friend information Populating on Multiple Pages
- Protected Profile Route
- Persistent Data via Supabase
- Passwords Hashed and Encrypted and must be strong
- React Router Navigation
- Master Layout and Nav
- Custom Landing Page and Logo
- Experience Bar with Increasing Levels and Level Names
- Friends Leader Board by Rank
- Member Since ISO 1860 translated via Moment
- Carbon Calculator and Breakdown PieChart
- Add Friend by username

## Installation
To install EcoQuest use *npm install*:

**[Repo](https://github.com/Meisosk/ecoQuest)**


## Technical Framework Usage: Full Stack 
- Supabase
- React
- React-Router-DOM
- Node.js

## Code Framework Styling
- Tailwind CSS
- Custom Styled Components
- CSS


## Build Status
Deployed@**[EcoQuest](https://eco-quest.netlify.app/)**

## Usage
<p>Click the Sign Up button top right of the landing and it will smoothly bring you down to the registration form to sign up. Use a strong password.</p></br> <p>When you successfully register, you will be taken to your profile page (denoted by the small person icon on the lefthand side of the website view). </p></br><p>You can add a friend by clicked add friend and typing in their username.</p> <p>You will start with no quests and no carbon footprint. Go to home to enter your data into the carbon calculator. </p> </br><p>This information will populate into a category breakdown. Go to Quests to accept some quests. Now you have accepted quests in your profile.</p></br> <p>When you complete them, they will add experience and completed status to your home page. When you add friends, you will see their levels on your home page. </p>


## Stretch Goals
- [ ] More detailed but user-friendly carbon calculator
- [ ] Logged in user appears in the leaderboard rankings with friends
- [ ] Filter Quests by levels
- [ ] More levels and more quests
- [ ] Avatars for users and friends
- [ ] EMAIL YOUR SENATOR (easy access to users to one click start an email to their state senator)
- [ ] Fancier animation on landing page scroll
- [ ] Friends' most recent accomplishments able to be viewed. 

## Challenges
- Two(2) junior developers with two(2) weeks to complete a fully functional website with any kind of carbon calculator!
- First time for both developers to use Trello, React Context, Supabase, Supabase Authentication, and Tailwind CSS

## Triumphs
- Route protection for the profile page while still creating a smooth experience from sign in to populating authenticated user data when signing in
- Only two merge conflicts and quick resolution to both
- Fixing the netlify refresh bug in regards to React Router when _redirects folder solution failed
- Researching and building from the ground up a working carbon calculator when there was no API (things like SIMAP run 500 dollars a year)

## Capstone Project Credits Go To The Following Builders
 
- Full-Stack Developer:[Meir Soskil](https://www.linkedin.com/in/meir-soskil/) 

- Full-Stack Developer:[Aleytys Isbell](https://www.linkedin.com/in/aleytys-isbell/) 




## Tech Stack Review

<h1>TECHNOLOGIES USED</h1>

<h2>CHALLENGE DECISIONS:</h2>

TAILWIND CSS

REACT CONTEXT

With no previous experience with React Context, we chose to use React Context in place of props drilling. With no previous experience with Tailwind CSS, we chose to challenge ourselves by using this inline foundational styling as opposed to Bootstrap’s templates.

<h3>TAKEAWAY ON REACT CONTEXT:</h3>
React Context was sufficient for the size of our app and did prevent some prop drilling and with more time we would have refactored to use it a bit more. A trade-off was that in using a Context Provider on the routing did cause some minor lag (about 3 seconds) for certain reusable information to populate on a page. Overall, redux would have been overkill.

<h3>TAKEAWAY ON TAILWIND CSS:</h3>
Inline styling can benefit developers sometimes by allowing faster tag customization. Unlike Bootstrap, Tailwind is not a series of fully styled elements like buttons. Its base code though makes for a smaller file and it is easier to customize, though the installation was more involved and required troubleshooting compared to installing Bootstrap. Property names are fairly usual “w” for “width”. However, some properties like view height were less intuitive and not quite the same as using CSS.

<h2>OTHER TECHNOLOGIES AND PACKAGES:</h2>

<h3>SUPABASE</h3>
The learning curve for Supabase was mitigated by both its on-site documentation as well as its dedicated users sharing their own experiences with the database. Supabase is SQL and comes with its own methods for authentication, password hashing and encryption, as well as protecting routes. This was a good database choice for us though we had never used it before because we had a lot of related data and it made security easier for building the site in just two weeks.

<h3>TAKEAWAY ON SUPABASE:</h3>
Supabase was easier and faster to learn and utilize than Firebase. If documentation on the site was not thorough enough, another developer or their help desk had already explained how to fix issues elsewhere. With more time, we would have learned to utilize their Row Level Security and Policies. As is, we used the SQL Query for one remote call function and for directly implementing a function and trigger for the authenticated users table to pass some information to the public users table and match ids across the tables.
