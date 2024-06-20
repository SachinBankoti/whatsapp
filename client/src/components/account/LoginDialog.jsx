import { Dialog, Box ,Typography,List,ListItem,styled} from "@mui/material";
import { qrCodeImage } from "../constants/data";

const Components = styled(Box)`
    display: flex;
`
const dialogStyle = {
  height: "96%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
  marginTop: "12%",
};

const Container = styled(Box)`
    padding: 56px 0 56px 56px;

`
const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
})
const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font0-family: inherit;
    margin-bottom: 25px;
`
const LoginDialog = () => {
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Components>
          <Container>
            <Title>To use WhatsApp on Your computer:</Title>
            <List>
                <ListItem>1. Open WhatsApp on your phone</ListItem>
                <ListItem>2. Tap Menu Setting</ListItem>
                <ListItem>3. Point your phone to this screen to capture the code</ListItem>
            </List>
          </Container>
          <Box>
            <QRCode src={qrCodeImage} alt="qr code"/>
          </Box>
        </Components>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
