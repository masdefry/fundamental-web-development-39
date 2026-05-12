// Export Named (Diperbolehkan melakukan banyak export named)
export function Greeting(username){
    return `Hello, ${username}`;
}

export const URL = '';

// Export Default (Hanya diperbolehkan 1x export default)
export default function Hello(){
    return `Hello`;
};

// export default function Others(){
//     return 'Others';
// }