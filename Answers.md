1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    3 Javascript array/object methods that do not produce side effects are .map(), .filter(), and .concat().
    
    Another method we use to create a new object while extending the properties of another object is Object.assign().

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    (answer in README)

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    (answer in README)

1.  What is middleware?

    middleware is a library/extension point for redux (and other languages), which allows us to add new functionality.  Commonly, middleware is used to intercept a process, run a function at that point, and use the data.  In redux, we have been using logger which console logs events in our app, and thunk which allows us to return functions in action creators.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    (answer in README)

1.  Which `react-redux` method links up our `components` with our `redux store`?

    .connect() links our components to the 'redux store'