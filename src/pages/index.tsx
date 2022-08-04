import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {set} from "../services/indexDb";


const Home: NextPage = () => {
 
  useEffect(() => {
      const runIndexDb = async () => {
        
    }
    runIndexDb();
}, []);

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
