# .NET Ranking App

This is another project made by following .NET tutorials in order for me to get more familiar with the development side of .NET applications. This is already the third project and the challenge for this one is to integrate a .NET backend with a React frontend, making it my first time writing separate backend/frontend code. Curious to see how this goes.

As always, tutorial notes can be seen in [the tutorial notes section](#tutorial-notes).

---

## Tutorial Notes
- NPM sometimes doesn't figure itself out when using IPv6, had to disable it to run `npm install` and enable it again. Probably something messy in my PC's configuration.
- Both the backend and the frontend applications, since they run separately, have their own routes.
  - .NET backend routes are defined by the Controllers
  - React frontend routes are defined in the `AppRoutes.js` (not sure if this is a default)
- React frontend has hot reloading by default, even if I just run `dotnet run`
- Putting the stuff below in the `setupProxy.js` file is apparently used to make the backend endpoints visible to the frontend. If this isn't done, the frontend won't be able to fetch stuff from the backend.
```javascript
const context = [
  "/weatherforecast",
  "/item",
];
```
- .NET debugging also works out of the box, which surprised me