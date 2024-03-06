Start:
npm i
npm start

Some details about the project.
1. I decided to use Expo for this project, just to mix things up since I did not use it for quite a while.
2. I used TanStack Query for infinite scroll, it is an amazing library for data fetching and data caching.
3. Used my regular Eslint setup.
4. I did not split changes into commits, which is usually a good thing to do, but I did not want to spend time on that.

I did not want to exceed the 3 hours as it was instructed, so some points I did not have time to do. I will give a list of what can be improved.
Points to improve:
1. Landscape design. 
2. Storing allPagesData in useGetSearchResults can be improved to add new pages to current data when fetching a new page instead of recreating it.
3. Store authToken in a better place then in code.
4. I see there are sometimes <em></em> tags in title, could parse those to make text inside them styled.
5. Possibly debounce search input fetching.