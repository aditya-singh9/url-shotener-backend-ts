export default (fn:any) => {
    return (req:any,res:any,next:any) => {
        fn(req,res,next).catch(next)
    }
};

//This function can be used before the async functions,
//in order to get rid of multiple try-catch blocks.