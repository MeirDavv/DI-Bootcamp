"use strict";
function getAction(userRole) {
    switch (userRole) {
        case 'attacker':
            return 'attack';
        case 'defender':
            return 'defend';
        case 'midfielder':
            return 'stay at your center';
        default:
            return 'you dont have a role';
    }
}
