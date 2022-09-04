import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import ShopCard from "../components/shopCard";

const d = [
    {
      title:'Amazon Basics Outdoor Rucksack Backpack',
      link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
      image:'https://images-na.ssl-images-amazon.com/images/I/916QRsnimTL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      title:'Columbia Glennaker Rain Jacket',
      link:"https://www.youtube.com/results?search_query=how+to+check+current+day+trfiic+on+search+console",
      image:'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UX679_.jpg'
    }
 ]
const Products = () =>{

    const [openEdit, setOpenEdit] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({} as any)

    const onClickEdit = (data: any) =>{
        console.log(data)
        setOpenEdit(true)
    }

    const handleClose = () => {
        setOpenEdit(false);
    }

    return(
        <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',

            }}
        >
           <div style={{ flexGrow: 1 }}>
                <Typography variant="h6">Manage Products</Typography>
           </div>
            <Button variant="contained">Add products</Button>
        </Box>
        
        <Box
            sx={{
                marginTop: '50px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '20px'
                
            }}
        >

            {
                d.map((place) =>{
                    const { title, link, image } = place
                    return(
                        <>
                        <ShopCard 
                            key={title}
                            title={title}
                            link={link}
                            image={image}
                            onClickEdit={onClickEdit}
                        /> 
                        </>
                    )
                }) 
            }

        </Box>
           
           {
            openEdit && 
                <div>
                    <Dialog
                        open={openEdit}
                        onClose={handleClose}
                    >
                        <DialogTitle>
                            Edit product
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                       
                        <DialogActions>
                            <Button autoFocus onClick={() => console.log('save...')}>
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
           }


          
        </>
    )
}

export default Products;