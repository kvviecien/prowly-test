// Filter email
// Don't accept addresses ending with '@prowly.com' or addresses that contain '+'

function filterEmail(address) {
    if ( !address || !address.includes('@') || address.endsWith('@prowly.com') || address.includes('+')) {
        return false;
    } else {
        return false;
    }
}
