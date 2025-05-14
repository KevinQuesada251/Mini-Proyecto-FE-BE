async function PostProductos(obj) {
    
    try {
        const response = await fetch("http://127.0.0.1:8000/api/productos/", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify(obj)  
        });
    
        if (!response.ok) {
            throw new Error('Error fetching productos');
        }
    
        return await response.json();
    } catch (error) {
        console.error('Error fetching productos', error);
        throw error;
    }
    
}

async function GetProductos() {
    
    try {
        const response = await fetch("http://127.0.0.1:8000/api/productos/", { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',  
            }
        });
        if (!response.ok) {
            throw new Error('Error fetching productos');
        }
    
        return await response.json();
    } catch (error) {
        console.error('Error fetching productos', error);
        throw error;
    }
    
}

async function DeleteProductos(id) {
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/productos/${id}/`, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',  
            }
        });
    
        if (!response.ok) {
            throw new Error('Error fetching productos');
        }
    
        return await response.json();
    } catch (error) {
        console.error('Error fetching productos', error);
        throw error;
    }
    
}

async function PatchProductos(obj,id) {
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/productos/${id}/`, { 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify(obj)  
        });
    
        if (!response.ok) {
            throw new Error('Error fetching productos');
        }
    
        return await response.json();
    } catch (error) {
        console.error('Error fetching productos', error);
        throw error;
    }
    
}


export {PostProductos,DeleteProductos,GetProductos,PatchProductos}