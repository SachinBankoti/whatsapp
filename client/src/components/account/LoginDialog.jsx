import { Dialog, Box ,Typography,List,ListItem,styled} from "@mui/material";
import { qrCodeImage } from "../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const Components = styled(Box)`
    display: flex;
`
const dialogStyle = {
  height: "96%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
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
const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        colour: #4a4a4a;
    }
`
const LoginDialog = () => {
    const { setAccount } = useContext(AccountContext);
    const onLoginSuccess=async(res)=>{
        const decoded = jwtDecode(res.credential);
        console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);
    }
    const onLoginError =(res)=>{
        console.log('Login Failed',res);
    }
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Components>
          <Container>
            <Title>To use WhatsApp on Your computer:</Title>
            <StyledList>
                <ListItem>1. Open WhatsApp on your phone</ListItem>
                <ListItem>2. Tap Menu Setting</ListItem>
                <ListItem>3. Point your phone to this screen to capture the code</ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: 'relative'}}>
            <QRCode src={qrCodeImage} alt="qr code"/>
            <Box style={{ position: 'absolute', top: '50%',transform: 'translateX(45%)'}}>
                <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Components>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
