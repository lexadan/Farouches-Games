export function colorFromSafety(safety: string) {
    switch (safety) {
        case 'safe':
            return 'green';
        case 'danger':
            return 'red';
        case 'home':
            return 'cyan';
        default:
            return 'grey';
    }
}