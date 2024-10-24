const env = process.env.ENV
//Idea, have a statement set of logic, where the system makes different requests based on the environment
switch (env) {
    case 'dev': {
        console.log('Use static content in our typescript files')
    } break;
    case 'staging': {
        console.log('Make a request to contentful CMS but don\'t cache it')
    } break;
    case 'prod': {
        console.log('Make a request to contentful CMS but try to cache where possible')
    } break;
    default:
        console.log('default Statement')
}