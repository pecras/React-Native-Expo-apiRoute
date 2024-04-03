interface InsertCarts {
    created_at?: string;
    id?: number;
    price:number;
    amount:number;
    order_id: number;
    product_id: number;
    quantity?: number;
    size?: string;
    order_status: 'New'|'bunding'|'Delivering'|'Delivered';
}


export async function POST(request: Request, {
    id,
    created_at,
    order_id,
    price,
    amount,
    product_id,
    quantity,
    size,order_status
}: InsertCarts) {

    try {
        created_at = String(Date.now());
        order_id = Date.now();
        const cartItem = {
            id,
            created_at,
            order_id,
            price,
            amount,
            product_id,
            quantity,
            size,order_status
        };

        return Response.json(cartItem);
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
