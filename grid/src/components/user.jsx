import React from "react";
import "./grid.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { ContractFactory, ethers } from "ethers";
import axios from "axios";
// import Warranty from "../artifacts/contracts/Warranty.sol/Warranty.json";



const UserInfo = () => {
  const navigate = useNavigate();
  return (
    <section>
      <UserGrid navigate={navigate} />
      <RedeemNft navigate={navigate} />
    </section>
  );
}
 
function UserGrid({navigate}) {
  return (
    <Container fluid="md my-5">
      <p className="display-4 text-warning mb-5 border-bottom">Registered Prodcuts </p>
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-md-between">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card
              className="userCard mx-auto"
              style={{ width: "auto" }}
              onClick={() => {navigate("/buyer/product")}}
            >
              <Card.Header>Sidhath Bhatla</Card.Header>
              <Card.Body>
                <Card.Title>Casio S-200</Card.Title>
                <Card.Text>
                 User ID-89719471
                </Card.Text>
                <Card.Text>
                 Date of Purchase- 2022-07-21
                </Card.Text>
                <Card.Text>
                  Manufacturer- Casio India, pvt ltd
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// redeem nft form

function RedeemNft() {
  const [address, setaddress] = useState("")
  const [balance, setbalance] = useState(0);
  const [ipfshash, setipfshash] = useState("")
  
  async function request_account() {
    console.log("first");

    //check if metamask exist
    if (window.ethereum) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setaddress(accounts[0]);
      } catch (err) {
        console.log("Error connecting");
      }
    } else {
      console.log("not detected");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await request_account();
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("provider", provider);
    const bal = await provider.getBalance(address);
    console.log("bal");
    setbalance(ethers.utils.formatEther(bal));
  }

  async function getPinata() {
    axios.get(`https://gateway.pinata.cloud/ipfs/${ipfshash}`)
    .then((res)=>{
      console.log("res-> ",res.data);
    })
  }

  // async function getMintedStatus(){
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const contactAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  //   const contract = new ethers.Contract(contactAddress, Warranty.abi, signer);
  //   const result = await contract.isContentOwned(ipfshash);
  //   console.log(result);
  // }

  // async function mintToken(){
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const contactAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  //   const contract = new ethers.Contract(contactAddress, Warranty.abi, signer);
  //   const connection = contract.connect(signer);
  //   const addr = connection.address;
  //   const result = await contract.payToMint(addr, ipfshash, {
  //     value: ethers.utils.parseEther('0.05'),
  //   })

  //   await result.wait();
  //   getMintedStatus();
  // }

  return (
    <Container fluid="md my-5" className="redeem outline">
      <div className="display-5 ms-md-4 mt-3 text-warning text-md-start">
        <p>Redeem a new NFT</p>
      </div>
      <div className="flex flex-col text-white mt-[2rem] ml-[1.3rem] ">
          <Button variant="primary" onClick={connectWallet} size="lg" className="button bht-btn mb-3" active>Connect Ethereum Wallet</Button> 
          <span>Your Wallet Adress is : {address}</span>
          <span>Wallet Balance : {balance}</span>
        </div>
      <Row md className="ms-md-3">
        <Col md={6}>
        <Form>
              <FloatingLabel
                className="mb-3 mt-4 text-dark"
                label="Name"
                name="name"
              >
                <Form.Control size="lg" type="text" placeholder="" value={ipfshash} onChange={(e) => setipfshash(e.target.value)}/>
              </FloatingLabel>
              {/* <Button variant="primary" type="submit" size="lg" className="button mb-3" onClick={mintToken} active>Redeem</Button>  */}
        </Form>
        </Col>
        
        
      </Row>
    </Container>
  );
}

export default UserInfo;
