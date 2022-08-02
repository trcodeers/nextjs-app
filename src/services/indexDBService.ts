

export const storeObject = (dbName: string, customerData: Array<any>) =>{
 // Open the indexedDB.
const request = indexedDB.open(dbName, 3);

request.onupgradeneeded = (event: any) => {

  const db = event.target.result;

  // Create another object store called "names" with the autoIncrement flag set as true.
  const objStore = db.createObjectStore(dbName, { autoIncrement : true });

  // Because the "names" object store has the key generator, the key for the name value is generated automatically.
  customerData.forEach(function(customer) {
        objStore.add(customer);
  });

};


}

export const RetriveData = () =>{

}