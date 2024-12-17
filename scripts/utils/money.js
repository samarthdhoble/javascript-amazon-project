export function formatCurrency(priceCents){
    return (Math.round(priceCents) * 0.40).toFixed(2);
}
