

export const storeObject = (dbName: string, customerData: Array<any>) =>{
    
    // Open the indexedDB.
    const request = indexedDB.open(dbName);

    request.onupgradeneeded = (event: any) => {

        const db = event.target.result;

        const objStore = db.createObjectStore(dbName, { autoIncrement : true });

        customerData.forEach(function(customer) {
                objStore.add(customer);
        });

    };


}

export const RetriveData = () =>{

}