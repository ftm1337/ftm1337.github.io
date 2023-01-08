function $(_) {return document.getElementById(_);}
let provider= {};
let signer= {};
window.addEventListener('load',async function()
{
	console.log("waitin for 3 secs..");
	$("cw_m").innerHTML = "Connecting.. Please wait."
	setTimeout(async () => { await basetrip(); /*getao(INITIAL); chkAppr(tokes[1][0]);*/ arf() }, 3000);
}, false);








async function basetrip()
{
	if(!(window.ethereum)){$("cw_m").innerHTML = "Wallet wasn't detected!";console.log("Wallet wasn't detected!");provider = new ethers.providers.JsonRpcProvider(RPC_URL);dr();return}
	else if(!Number(window.ethereum.chainId)==CHAINID){$("cw_m").innerHTML = "Wrong network! Please Switch to "+CHAINID;provider = new ethers.providers.Web3Provider(window.ethereum);dr();return}
	else if(//typeOf window.ethereum == Object &&Number(window.ethereum.chainId)
		Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Recognized Ethereum Chain:", window.ethereum.chainId,CHAINID);
		provider = new ethers.providers.Web3Provider(window.ethereum)
		signer = provider.getSigner();
		if(!(window.ethereum.selectedAddress==null)){console.log("Found old wallet:", window.ethereum.selectedAddress);cw();}
		else{console.log("Didnt find a connected wallet!");cw();}
		dr();
		//chkAppr(tokes[1][0])
	}
	else //if(Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Couldn't find Ethereum Provider - ",CHAINID,window.ethereum.chainId)
		if((typeof Number(window.ethereum.chainId) == "number")){$("cw_m").innerHTML = "Wrong network! Switch from " + Number(window.ethereum.chainId)+" to "+CHAINID}
		provider = new ethers.providers.JsonRpcProvider(RPC_URL);
		signer = provider.getSigner()
		$("connect").innerHTML=`Wallet not found.<br><br><button onclick="window.location.reload()" id="btn-connect">Retry?</button>`;
		dr();
	}
	if(Number(window.ethereum.chainId) != null &&(window.ethereum.chainId!=CHAINID))
	{
		await window.ethereum.request({
    		method: "wallet_addEthereumChain",
    		params: [{
        		chainId: "0x"+(CHAINID).toString(16),
        		rpcUrls: [RPC_URL],
        		chainName: RPC_URL.split(".")[1],
        		nativeCurrency: {
            		name: RPC_URL.split(".")[1],
            		symbol: RPC_URL.split(".")[1],
            		decimals: 18
        		},
        		blockExplorerUrls: [EXPLORE.split("/address")[0]]
    		}]
		});
		dr();
		window.location.reload;
	}
	//DrefreshFarm()
	//arf()
}



/*
function fornum(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(2)+" Qt."}
	else if(_n>1e15){n_=(_n/1e15).toFixed(2)+" Qd."}
	else if(_n>1e12){n_=(_n/1e12).toFixed(2)+" Tn."}
	else if(_n>1e9){n_=(_n/1e9).toFixed(2)+" Bn."}
	else if(_n>1e6){n_=(_n/1e6).toFixed(2)+" Mn."}
	else if(_n>1e3){n_=(_n/1e3).toFixed(2)+" Th."}
	else if(_n>0){n_=(_n/1e0).toFixed(5)+""}
	return(n_);
}
*/
function fornum(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(3)+"Qt"}
	else if(_n>1e15){n_=(_n/1e15).toFixed(3)+"Qd"}
	else if(_n>1e12){n_=(_n/1e12).toFixed(3)+"T"}
	else if(_n>1e9){n_=(_n/1e9).toFixed(3)+"B"}
	else if(_n>1e6){n_=(_n/1e6).toFixed(3)+"M"}
	else if(_n>1e3){n_=(_n/1e3).toFixed(3)+"K"}
	else if(_n>1e1){n_=(_n/1e0).toFixed(5)+""}
	else if(_n>0.0){n_=(_n/1e0).toFixed(8)+""}
	return(n_);
}
ab1=
[
	{
	"constant": true,
	"inputs": [
		{
		"internalType": "address",
		"name": "",
		"type": "address"
		},
		{
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	],
	"name": "allowance",
	"outputs": [
		{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [
		{
		"internalType": "address",
		"name": "spender",
		"type": "address"
		},
		{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
		}
	],
	"name": "approve",
	"outputs": [
		{
		"internalType": "bool",
		"name": "",
		"type": "bool"
		}
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "guy",
				"type": "address"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
	{
	"constant": true,
	"inputs": [
		{
		"internalType": "address",
		"name": "",
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
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "decimals",
	"outputs": [
		{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "factory",
	"outputs": [
		{
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "getReserves",
	"outputs": [
		{
		"internalType": "uint112",
		"name": "_reserve0",
		"type": "uint112"
		},
		{
		"internalType": "uint112",
		"name": "_reserve1",
		"type": "uint112"
		},
		{
		"internalType": "uint32",
		"name": "_blockTimestampLast",
		"type": "uint32"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [
		{
		"internalType": "address",
		"name": "_token0",
		"type": "address"
		},
		{
		"internalType": "address",
		"name": "_token1",
		"type": "address"
		}
	],
	"name": "initialize",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "symbol",
	"outputs": [
		{
		"internalType": "string",
		"name": "",
		"type": "string"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "name",
	"outputs": [
		{
		"internalType": "string",
		"name": "",
		"type": "string"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

abia = [
{
	"constant": false,
	"inputs": [
		{
		"internalType": "address",
		"name": "spender",
		"type": "address"
		},
		{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
		}
	],
	"name": "approve",
	"outputs": [
		{
		"internalType": "bool",
		"name": "",
		"type": "bool"
		}
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	}
]
async function cw()
{
	let cs = await cw2(); cs?console.log("Good to Transact"):cw2()
}
async function cw2()
{
	if(!(window.ethereum)){$("cw_m").innerHTML="Metamask not detected! Trying a refresh";console.log("Metamask not found!");window.location.reload();return(0)}
	if(!(Number(window.ethereum.chainId)==CHAINID)){$("cw_m").innerHTML="Wrong network detected! Please switch to chain ID", CHAINID, "and refresh this page.";return(0)}
	if(typeof provider == "undefined"){$("cw_m").innerHTML="Provider not detected! Trying a refresh";console.log("Provider not found!");window.location.reload();return(0)}
	/*
	if(!
		(isFinite(Number(accounts[0])))
		|| (isFinite(Number(window.ethereum.selectedAddress)))
	){console.log("NAAAAAAAAAAAAAAAAA");window.location.reload();}
	*/

	//004
	window.ethereum
	.request({ method: 'eth_requestAccounts' })
	.then(r=>{console.log("004: Success:",r);})	//re-curse to end curse, maybe..
	.catch((error) => {	console.error("004 - Failure", r, error); });


	//005
	const accounts = await window.ethereum.request({ method: 'eth_accounts' });
	if(Number(accounts[0])>0){console.log("005: Success - ", accounts)}
	else{console.log("005: Failure", accounts)}


	/*006
	const en6 = await window.ethereum.enable()
	if(Number(en6[0]) > 0){console.log("006 - Success",en6)}
	else{console.log("006 - Failure", en6)}
	*/


	/*003
	try {
      console.log("attempting cw()")
      const addresses = await provider.request({ method: "eth_requestAccounts" });
      console.log("addresses:",addresses)
    } catch (e) {
      console.log("error in request", e);
      window.location.reload(true);
    }
    */

    //002
    //try{await provider.send("eth_requestAccounts", []);console.log("CWE:",e);}//await window.ethereum.enable();
	//catch(e){console.log("CWE:",e);window.location.reload(true)}
	console.log("doing the paints")
	$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);
	if(window.ethereum.chainId==250) (new ethers.Contract("0x14ffd1fa75491595c6fd22de8218738525892101",["function getNames(address) public view returns(string[] memory)"],provider)).getNames(window.ethereum.selectedAddress).then(rn=>{if(rn.length>0){$("cw").innerHTML="Hello, <span style='font-family:;font-size:1.337em'>"+rn[0]+"</span> ^‿^"}else{$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);}})
	$("cw_m").innerHTML=""
	$("connect").style.display="none";
	$("switch").style.display="block";
	//farm_1_f_chappro()
	gubs();
	dr();
	return(1);
}
function fornum2(n,d)
{
	_n=(Number(n)/10**Number(d));
	n_=_n;
	if(_n>1e18){n_=(_n/1e18).toFixed(2)+" Quintillion"}
	else if(_n>1e15){n_=(_n/1e15).toFixed(2)+" Quadrillion"}
	else if(_n>1e12){n_=(_n/1e12).toFixed(2)+" Trillion"}
	else if(_n>1e9){n_=(_n/1e9).toFixed(2)+" Billion"}
	else if(_n>1e6){n_=(_n/1e6).toFixed(2)+" Million"}
	else if(_n>1e3){n_=(_n/1e3).toFixed(2)+" Thousand"}
	else if(_n>1){n_=(_n/1e0).toFixed(8)+""}
	return(n_);
}
async function gubs() {
	USD = new ethers.Contract(BASE,TKNABI,signer);
	USD.balanceOf(window.ethereum.selectedAddress)
	.then(_b=>{
		b=Number(_b)/10**DEC_A;
		$("usb-mtv").innerHTML=b.toLocaleString();
		$("in-n").max = Math.min(b,SEEDMAX);
		$("in-r").max = Math.min(b,SEEDMAX);
	})
	_S = new ethers.Contract(SEEDR,SDRABI,provider);
	spr = await Promise.all([
		_S.allocation(window.ethereum.selectedAddress),
		_S.contribution(window.ethereum.selectedAddress)
	]);
	$("s_ud").innerHTML = (spr[1]/1e6).toLocaleString() + " USDC";
	$("s_ua").innerHTML = (spr[0]/1e18).toLocaleString() + " RAVE";
}
SDRABI = [{"inputs":[{"internalType":"address","name":"_a","type":"address"},{"internalType":"address","name":"_b","type":"address"},{"internalType":"address","name":"_c","type":"address"},{"internalType":"address","name":"_d","type":"address"},{"internalType":"uint256","name":"_u","type":"uint256"},{"internalType":"uint256","name":"_m","type":"uint256"},{"internalType":"uint256","name":"_t","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Deposit","type":"event"},{"inputs":[],"name":"MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allocated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_who","type":"address"}],"name":"allocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"asset","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"base","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dao","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"participants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_t","type":"address"}],"name":"rescue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_t","type":"uint256"}],"name":"setClaimTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_d","type":"address"}],"name":"setDao","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_u","type":"uint256"}],"name":"setUnits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sweep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"total","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"units","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
TKNABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"s","type":"address"},{"name":"a","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"s","type":"address"},{"name":"d","type":"address"},{"name":"a","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"d","type":"address"},{"name":"a","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"o","type":"address"},{"indexed":true,"name":"s","type":"address"},{"indexed":false,"name":"a","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"s","type":"address"},{"indexed":true,"name":"d","type":"address"},{"indexed":false,"name":"a","type":"uint256"}],"name":"Transfer","type":"event"}]
async function dr() {
	_S = new ethers.Contract(SEEDR,SDRABI,provider);
	spr = await Promise.all([
		_S.total(),
		_S.allocated(),
		_S.participants()
	]);
	$("s_tr").innerHTML = (spr[0]/1e6).toLocaleString() + " USDC";
	$("s_ta").innerHTML = (spr[1]/1e18).toLocaleString() + " RAVE";
	$("s_pt").innerHTML = Number(spr[2]) + " Ravers";
	$("s_pr").innerHTML = (spr[0]/1e6/1e5*100).toFixed(2) + " %";
}
function notice(c) {
	window.location = "#note"
	$("content1").innerHTML = c
}

async function confirm() {
	v = $("in-r").value;
	if(!isFinite(v)){notice("allocation amount looks ehh... pls check!"); return}
	//if(v< SEEDMIN){notice("allocation amount too low!"); return}
	if(v> SEEDMAX){notice("allocation amount too high!"); return}
	//notice("<h3>This SeedR round has not started.</h3>Patience, grasshopper!<br><br> Go touch some grass 😏")
	_BASE = new ethers.Contract(BASE,TKNABI,signer);
	_ASSET = new ethers.Contract(ASSET,TKNABI,signer);
	al = await(_BASE.allowance(window.ethereum.selectedAddress,SEEDR))
	v_d = Math.floor(v*10**DEC_A)
	if(al<v_d) {
		notice(`
			<h2>Approve ${v} USDC.</h2>
			SeedR needs your approval to spend ${v} USDC.<br><br>
			Please approve this transaction in your wallet.
		`)
		_tr = await _BASE.approve(SEEDR,BigInt(v_d));
		notice(`
			<h3>Submitting Approval Transction!</h3>
			<h4><a target="_blank" href="https://ftmscan.com/tx/${_tr.hash}">View on Explorer</a></h4>
		`);
		notice(`
			<h3>Approval Completed!</h3>
			<br><br>
			<h4><a target="_blank" href="https://ftmscan.com/tx/${_tr.hash}">View on Explorer</a></h4>
			<br><br>
			Please confirm the <b>Deposit</b> at your wallet provider now.
		`)
	}
	_SEEDR = new ethers.Contract(SEEDR, ["function deposit(uint)"], signer);
	_tr = await _SEEDR.deposit(BigInt(v_d));
	notice(`
		<h3>Submitting Deposit Transction!</h3>
		Seeding ${v} USDC.. Please wait for transaction to confirm.<br>
		<h4><a target="_blank" href="https://ftmscan.com/tx/${_tr.hash}">View on Explorer</a></h4>
	`);
	console.log(_tw)
	notice(`
		<h3>Deposit Completed!</h3>
		<br><br>
		<h4><a target="_blank" href="https://ftmscan.com/tx/${_tr.hash}">View on Explorer</a></h4>
		<br><br>
		Check back after the completion of the sale to collect your tokens!
	`)


	return
	//USD = new ethers.Contract(USDC,ab1,signer);
	//const tx = USD.transfer(COLLECT,BigInt((v*10**UDEC).toFixed()),{gasLimit:G_LIMIT})
}

function vals(i) {
	if(i==0) {
		//if($("in-r").value < SEEDMIN){notice("allocation amount too low!"); return}
		if($("in-r").value > SEEDMAX){notice("allocation amount too high!"); return}
		$("in-n").value = $("in-r").value;
	}
	if(i==1) {
		//if($("in-n").value < SEEDMIN){notice("allocation amount too low!"); return}
		if($("in-n").value > SEEDMAX){notice("allocation amount too high!"); return}
		$("in-r").value = $("in-n").value;
	}
}

function arf(){
	o = INITIAL; c=0;
	var xfr = setInterval(
		function(){
			if(!isFinite( v = $("in-n").value )) { return }
			//if($('ain').value == "" ) { $('ain').value=INITIAL }
			if(o != $('in-n').value){ $('in-r').value = $("in-n").value }
			o = $('in-n').value
			c++
		},
		500
	)
}