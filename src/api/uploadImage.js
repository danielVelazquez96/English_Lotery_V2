

const uploadImage = async (urlImage) => {
    
    const urlApi=`http://localhost:5000/api/upload`;
    try {
        const resp=await fetch(urlApi, {
            method: 'POST',
            body: JSON.stringify({ data: urlImage }),
            headers: { 'Content-Type': 'application/json' },
        });
        const {url}=await resp.json()
        return url;
    } catch (err) {
        console.error(err);
    }
};

export default uploadImage