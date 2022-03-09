import { useContext } from "react";
import {  List, ListItem, ListItemText } from "@mui/material";
import {useRouter} from 'next/router';
import Link from 'next/link';
import { Tabs } from "../../constants/GlobalConstants";
import DarkModeContext from "../../context/DarkModeContext";

type Props = {
    onListItemClick?: () => void
}
const DrawerMenu = (props: Props) =>{

    const { onListItemClick } = props
    const router = useRouter()
    const { handleDarkModeChange } = useContext<any>(DarkModeContext);

    return (
        <>
            <List>
                {Tabs.map((tab: { label: string, route: string }) => (
                    <Link key={tab.route} href={tab.route} passHref>
                        <ListItem onClick={onListItemClick} style={{ display: 'flex', justifyContent:'center', borderRadius: '20px'}} button selected = { tab.route === router.pathname } key={tab.label}>
                            <ListItemText style={{ fontWeight: 600 }}>
                                <div style={{ fontWeight: 500 }}> {tab.label} </div>  
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
                <p onClick={() => handleDarkModeChange()}>Dark</p>
            </List>
        </>
      );
 } 

export default DrawerMenu;