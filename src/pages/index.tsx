import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import IndexedDb from "../services/indexDb";


const Home: NextPage = () => {
 
  useEffect(() => {
      const runIndexDb = async () => {
        const indexedDb = new IndexedDb('test');
        await indexedDb.createObjectStore(['books', 'students']);
        await indexedDb.putValue('books', { name: 'A Game of Thrones' });
        await indexedDb.putBulkValue('books', [{ name: 'A Song of Fire and Ice' }, { name: 'Harry Potter and the Chamber of Secrets' }]);
        await indexedDb.getValue('books', 1);
        await indexedDb.getAllValue('books');
        await indexedDb.deleteValue('books', 1);
    }
    // runIndexDb();
}, []);

const add = async() =>{
  const indexedDb = new IndexedDb('test');
  await indexedDb.putValue('books', { name: 'A Game of Thrones' });

}

  return (
    <div className={styles.container}>
      This is from Home...
      <ul>
        <li>
          <Link href="/">
            <Button onClick={add} variant="outlined">Outlined</Button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Button variant="contained">About Us</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
