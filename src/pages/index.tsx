import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { storeObject } from "../services/indexDBService";

const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

const Home: NextPage = () => {
 
  useEffect(() =>{
    storeObject('customers', customerData, 'ssn')
  }, [])
 
  return (
    <div className={styles.container}>
      This is from Home...
      <ul>
        <li>
          <Link href="/">
            <Button variant="outlined">Outlined</Button>
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
