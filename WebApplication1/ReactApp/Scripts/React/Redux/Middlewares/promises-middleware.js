const middleware = store => next => action => {
	if (action.type !== 'PROMISE') {
	  return next(action);
	}

  console.log("PROMISE", action);

  const [startAction, successAction, failureAction] = action.actions;
  store.dispatch({type: startAction});

  let queryParams = action.queryParams;
  console.log("PROMISE: ", action.promise);

  return action.promise(queryParams).then(function(data) {
    console.log(data);
    if (!data) {
      data = queryParams;
    }
    console.log(data);    
    return store.dispatch({
        type: successAction, 
        data: data
      });
    },
    error => store.dispatch({
    	type: failureAction, 
    	error
    })
  );
};

export default middleware;