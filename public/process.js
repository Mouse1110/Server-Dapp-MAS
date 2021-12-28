
$(document).ready(function(){
    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_task",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_maxValue",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "eInit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_task",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_maxValue",
                    "type": "uint256"
                }
            ],
            "name": "ePlay",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_currentWinner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_currentBid",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_prepareSite",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_layFloor",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_paint",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_buildWall",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_installStructure",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_completedStructure",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "eWinner",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_prepareSite",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_layFloor",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_paint",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_buildWall",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_installStructure",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_completedStructure",
                    "type": "uint256"
                }
            ],
            "name": "auction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "domain",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "end",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_task",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxValue",
                    "type": "uint256"
                }
            ],
            "name": "initAuctionArtifact",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "play",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    const addressSM = 0x043434357D55Fe10c9b4e936A85Dc1575159C426

    var addressIndex = "";
    
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    // Tao contract cho MetaMask
    var contract_MM = web3.eth.Contract(abi,addressSM);
    console.log(contract_MM);

    // Tao contract cho Infura
    var provider = new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/6c3f138a49ec453697279555285d1105');
    
    var web3_infura = new Web3(provider);
    var contract_Infura = web3_infura.eth.Contract(abi,addressSM);
    console.log(contract_Infura);
    contract_Infura.events.eInit({filter:{},fromBlock:"latest"},function(error,data){
        if(error){
            console.log(error);
        } else {
            
            if (data.returnValues[0].toString().toLocaleLowerCase() === addressIndex){
                   $.post('./create',{
                    task:data.returnValues[1],
                    address:data.returnValues[0],
                    maxvalue:data.returnValues[2].toString(),
                    tokenId:data.returnValues[3].toString(),
                },function(value){
                    if (value.err==0){
                        alert("Khởi tạo thành công");
                    }
                });
            }
        }
    });
    contract_Infura.events.ePlay({filter:{},fromBlock:"latest"},function(error,data){
        if(error){
            console.log(error);
        } else {
            var inner = `<li>${data.returnValues[0]}</li>`;
            $('#ulList').append(inner);
        }
    });
    contract_Infura.events.eWinner({filter:{},fromBlock:"latest"},function(error,data){
        if(error){
            console.log(error);
        } else {
            if (data.returnValues[0].toString().toLocaleLowerCase() === addressIndex){
                $.post('./add',{
                    currentWinner:data.returnValues[1],
                    currentBid:data.returnValues[2].toString(),
                    PA:data.returnValues[3].toString(),
                    LF:data.returnValues[4].toString(),
                    BW:data.returnValues[5].toString(),
                    P:data.returnValues[6].toString(),
                    IS:data.returnValues[7].toString(),
                    CS:data.returnValues[8].toString(),
                    tokenId:data.returnValues[9].toString(),
             },function(value){
                if(value.err==0){
                    alert("Hoàn thành buổi đấu giá");
                }
             });
         }
        }
    });
    checkMM();
    $('#btnConnectMM').click(function(){
        connectMM().then((data)=>{
           addressIndex = data[0];
           console.log(addressIndex);
           document.getElementById('idMM').innerHTML = addressIndex;
        }).catch((err)=>{
            console.log('Connect MM failer!');
        });
    });

    $('#btnDangKy').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            $.post('./signup',{
                name:$('#txtHoTen').val(),
                address:addressIndex,
            },function(data){
                console.log(data);
                if(data.err == 0){
                    alert('Đăng ký thành công');
                }
            });
        }
       
    });
    $('#btnDangNhap').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            $.post('./login',{
                name:$('#txtHoTen').val(),
                address:addressIndex,
            },function(data){
                if(data.err == 0){
                    alert('Bạn đã đăng nhập');
                } else {
                    alert('Tài khoản của bạn chưa có trên hệ thống');
                }
            });
        }
    });
    // Init Bid
    $('#btnCreateArtifact').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
        contract_MM.methods.initAuctionArtifact($('#txtTask').val(),$('#txtMaxValue').val()).send({from:addressIndex});    
        }
    });

    $('#btnPlay').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            console.log(addressIndex);
            contract_MM.methods.play().send({from:addressIndex});
        }
    });

    $('#btnEnd').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            contract_MM.methods.end().send({from:addressIndex});
        }
    });
    $('#btnList').click(async function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
          $.get('./bid',function(data){
                    if(data){
                        if(data.err>0){
                            document.getElementById('ulList').innerHTML = '<h6>Danh sách rỗng</h6>';
                            return;
                        }
                        var inner = '';
                        data.data.forEach(element => {
                            inner += `<li>${element.address}</li>`;
                        });
                        document.getElementById('ulList').innerHTML = inner;
                    }
                });
        }
    });
    $('#btnDauThau').click(function(){
        if (addressIndex.length == 0){
           alert('Chưa kết nối MM');
        } else {
            var P = parseFloat($('#txtI').val()) +  parseFloat($('#txtE').val());
            var IS = parseFloat($('#txtEC').val()) +  parseFloat($('#txtP').val());
            var CS = parseFloat($('#txtBR').val()) +  parseFloat($('#txtIW').val())+  parseFloat($('#txtID').val());
        contract_MM.methods.auction($('#txtAddress').val(),$('#txtPA').val(),$('#txtLF').val(),$('#txtBW').val(),P,IS,CS).send({from:addressIndex});    
        }
    });
});

async function connectMM(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}

function checkMM(){
    if (typeof window.ethereum !== 'undefined') {
        alert('MetaMask is installed!');
      } else {
          alert('MM isn\'t installed!');
      }
}
