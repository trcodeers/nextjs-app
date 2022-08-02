

export const storeObject = (dbName: string, data: Array<any>, keyPath?: any, indexValue?:Array<{ key: string, unique: boolean }>) =>{
    
    // Open the indexedDB.
    const request = indexedDB.open(dbName);

    request.onupgradeneeded = (event: any) => {

        const db = event.target.result;

        const objStore = db.createObjectStore(
                dbName, 
                keyPath ? { keyPath: keyPath } : {autoIncrement : true}
            );

        // Index if given
        if(indexValue){
            indexValue.map((el: any) =>{
                const { key, unique } = el
                objStore.createIndex(key, key, { unique });
            })
        }

        // Insert data
        data.forEach((el: any) => {
                objStore.add(el);
        });

    };

}

export const retriveData = (dbName: string) =>{

    const request = indexedDB.open(dbName);
    let result

     request.onsuccess = async(event: any) => {

        const db = event.target.result;

        const transaction = db.transaction([dbName]);
        const objectStore = transaction.objectStore(dbName);
        const data = objectStore.getAll();
        
     data.onsuccess = (ev: any) =>{
            return ev.target.result
        }
    }

    return result
    
}


export const removeData = () =>{

}