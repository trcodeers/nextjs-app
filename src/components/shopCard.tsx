import { Card, CardContent, Box, Button, Typography } from "@mui/material"

type Props = {
    title: string,
    image: string,
    link: string,
    onClickEdit: (data: any) => void
}
const ShopCard = (props: Props) =>{

    const { title, image, link, onClickEdit } = props
    
    return(
        <>
            <Card
                sx={{
                    width: '250px',
                    height: '500px',
                    cursor: 'pointer',
                }}
            >
                <CardContent>
                    <Button onClick={() => onClickEdit({title, image, link})}>Edit</Button>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px'
                    }}
                >
                    <img 
                        src={image}
                        alt="image"
                        width='250px' 
                        height='250px'
                    />

                <Box textAlign={'center'}>
                    <Typography variant="body2">
                        {title}
                    </Typography>
                </Box>
                </Box>
                <div style={{ position: 'relative' }}>
                    <Button 
                        onClick={(e)=>{
                            e.stopPropagation()
                            const urlToOpen = new URL(link)
                            window.open(urlToOpen, '_blank')
                        }}
                        style={{ position: 'absolute', bottom: '-110px' }} 
                        fullWidth 
                        size='large' 
                        variant='outlined'
                    >
                        Visit
                    </Button>
                </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ShopCard;