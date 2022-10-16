EXPLORE = "https://ftmscan.com/address/";
tsca = "0x0786c3a78f5133f08c1c70953b8b10376bc6dcad";
function $(_) {return document.getElementById(_);}
let provider= {};
let signer= {};
window.addEventListener('load',async function()
{

	console.log("waitin for 3 secs..");
	$("cw_m").innerHTML = "Connecting.. Please wait."
	setTimeout(async () => { basetrip(); }, 3000);
}, false);

async function basetrip()
{
//if(window.ethereum&&Number(window.ethereum.chainId)==250){web3 = new Web3(web3.currentProvider);if(!(window.ethereum.selectedAddress==null)){cw()}}

	if(!(window.ethereum)){$("cw_m").innerHTML = "Wallet wasn't detected!";console.log("Wallet wasn't detected!");provider = new ethers.providers.JsonRpcProvider(RPC_URL);DrefreshFarm();pantvl();return}
	else if(!Number(window.ethereum.chainId)==CHAINID){$("cw_m").innerHTML = "Wrong network! Please Switch to "+CHAINID;provider = new ethers.providers.Web3Provider(window.ethereum);DrefreshFarm();pantvl();return}
	else if(//typeOf window.ethereum == Object &&Number(window.ethereum.chainId)
		Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Recognized Ethereum Chain:", window.ethereum.chainId,CHAINID);
		provider = new ethers.providers.Web3Provider(window.ethereum)
		signer = provider.getSigner();
		if(!(window.ethereum.selectedAddress==null)){console.log("Found old wallet:", window.ethereum.selectedAddress);cw();}
	}
	else //if(Number(window.ethereum.chainId)==CHAINID)
	{
		console.log("Couldn't find Ethereum Provider - ",CHAINID,window.ethereum.chainId)
		if((typeof Number(window.ethereum.chainId) == "number")){$("cw_m").innerHTML = "Wrong network! Switch from " + Number(window.ethereum.chainId)+" to "+CHAINID}
		provider = new ethers.providers.JsonRpcProvider(RPC_URL);
		signer = provider.getSigner()
		$("connect").innerHTML=`Wallet not found.<br><br><button onclick="window.location.reload()" id="btn-connect">Retry?</button>`;
	}
	DrefreshFarm()
	pantvl()
	arf()
}
async function pantvl()
{
	tabi = [{"constant": true,"inputs": [],"name": "tvl","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}]
	const tg = new ethers.Contract(tsca,tabi,provider)
	let r = await tg.tvl()
	$("pantvl").innerHTML = "$"+(Number(r._hex)/1e18).toLocaleString()
}/*
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
	$("cw_m").innerHTML=""
	$("connect").style.display="none";
	$("switch").style.display="block";
	farm_1_f_chappro()
	gubs();
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
function arf(){	var xfr = setInterval(function()
	{
		console.log("refreshing farm stats", Date.now());
		gubs()
		DrefreshFarm()
	}, 30000);}

abbrove=[
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
	}];

farabi=
[{"inputs":[{"internalType":"address","name":"_w","type":"address"},{"internalType":"address","name":"_m","type":"address"},{"internalType":"address","name":"_e","type":"address"},{"internalType":"uint8","name":"_p","type":"uint8"},{"internalType":"address","name":"_R","type":"address"},{"internalType":"address[]","name":"_rA","type":"address[]"},{"internalType":"address[]","name":"_rB","type":"address[]"},{"internalType":"string","name":"_id","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Compounded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Eliteness","outputs":[{"internalType":"address","name":"ELITE","type":"address"},{"internalType":"uint256","name":"ELITES","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allnums","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mw","type":"uint256"},{"internalType":"uint256","name":"_wi","type":"uint256"},{"internalType":"uint256","name":"_pf","type":"uint256"},{"internalType":"address","name":"_t","type":"address"},{"internalType":"uint256","name":"_df","type":"uint256"}],"name":"config","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dao","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"declareEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"doHardWork","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"u","type":"address"}],"name":"eliteness","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergency","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"id","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mc","outputs":[{"internalType":"contract IMasterchef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"}],"name":"pullElite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"elite","type":"address"},{"internalType":"uint256","name":"elites","type":"uint256"}],"name":"pushElite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"rescue","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revokeEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"routeA","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"routeB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"salvage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tvl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"utvl","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"want","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
async function farm_1_f_approve()
{
	try
	{
		theCon = new ethers.Contract(pairadd, abbrove, signer);
		rectx = await theCon.approve(f_1_add,"999999999999999999999999999999999999");
		console.log("Granting approval: txhash=",rectx);
		await txr.wait();
		console.log("Approval Granted: txhash=",rectx)
		gs()
		farm_1_f_chappro()
		//.send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function farm_1_f_chappro()
{
	try
	{
		theCon = new ethers.Contract(pairadd, farabi, provider);
		p1 = theCon.allowance(window.ethereum.selectedAddress,f_1_add)
		p2 = theCon.balanceOf(window.ethereum.selectedAddress)

		await Promise.all([p1,p2]).then(p3=>{
			console.log("allows,bal",p3, "suff.allow?",p3[0]>p3[1]);
			if(Number(p3[0])>Number(p3[1]))
			{
				//$("farm_1_approved").value="Approved";
				$("btn-approve").disabled=true;
				$("ivst").style.display="block";
				$("appr").style.display="none";
			}
			else
			{
				//$("farm_1_approved").value="Not Approved";
				$("btn-approve").disabled=false;
				$("ivst").style.display="none";
				$("appr").style.display="block";
			}
		})
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

function gs(){
	console.log("gs lol");
	gubs()
	DrefreshFarm()
}

async function deposit()
{
	try
	{
		theCon = new ethers.Contract(f_1_add, farabi, signer);
		m=($("inp-da").value);m*=(10**DECIMAL);m-=m%1;m=m.toLocaleString("fullwide",{useGrouping:false})
		txr = await theCon.deposit(m);
		console.log("deposit: amount=",m,"txhash:",txr)
		await txr.wait()
		console.log("deposit succeeded:  amount=",m,"txhash:",txr);
		gubs()
		//.send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function doHardWork()
{
	try
	{
		theCon = new ethers.Contract(f_1_add, farabi, signer);
		txr = await theCon.doHardWork()//.send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
		console.log("work submitted. txhash:",txr)
		await txr.wait()
		console.log("work done. txhash:",txr);
		gubs()
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function withdraw()
{
	try
	{
		var conAdd = f_1_add;
		theCon = new ethers.Contract(f_1_add, farabi, signer);
		m=($("inp-wa").value);m*=(10**DECIMAL);m-=m%1;m=m.toLocaleString("fullwide",{useGrouping:false})
		txr = await theCon.withdraw(m)//.send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
		console.log("withdraw attempted: amount=",m,"txhash:",txr)
		await txr.wait()
		console.log("withdrawal completed: amount=",m,"txhash:",txr)
		gubs()
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function enter()
{
	try
	{
		theCon = new ethers.Contract(f_1_add, farabi, signer);
		theLPT = new ethers.Contract(pairadd, farabi, provider);
		var m = await theLPT.balanceOf(window.ethereum.selectedAddress)
		txr = await theCon.deposit(m)//.send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
		console.log("deposited all: amount=",m,"txhash:",txr)
		await txr.wait()
		console.log("deposit succeeded:  amount=",m,"txhash:",txr);
		gubs()
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function exit()
{
	try
	{
		var conAdd = f_1_add;
		theCon = new ethers.Contract(f_1_add, farabi, signer);
		var m = await theCon.balanceOf(window.ethereum.selectedAddress)
		txr = await theCon.withdraw(m)//.send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
		console.log("withdraw all: amount=",m,"txhash:",txr)
		gubs()
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function gubs()
{
	try
	{
		farm_1_f_chappro();

		theCon = new ethers.Contract(f_1_add, farabi, provider);
		theLPT = new ethers.Contract(pairadd, farabi, provider);
		var p = theCon.balanceOf(window.ethereum.selectedAddress)
		var q = theLPT.balanceOf(window.ethereum.selectedAddress)
		/*
		var info = theCon.info()
		//ABI for info*() varies per grain
		//Best to do a https-POST instead of json-RPC
		*/
		data={"jsonrpc":"2.0","id":9,"method":"eth_call","params":[{"data":"0x370158ea","to":f_1_add},"latest"]}
		let info = (await fetch(RPC_URL, { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json' } })).json();
		await Promise.all([p,q,info]).then(s=>{
			aum = Number("0x" + (s[2].result).substr(66,64));
		//DECIMALDEPENDENT : 1e18 => 1e6 , 1e18 => 1e12
			if ($("wd-usd")!=null) $("wd-usd").innerHTML=((Number(s[0])/TS*VL)/(10**DECIMAL)).toFixed(DECIMAL);
			$("dep-ab").innerHTML=(s[1]/(10**DECIMAL)).toFixed(DECIMAL);
			$("redemp").innerHTML=(s[0] * aum / (10**(2*DECIMAL))).toFixed(DECIMAL);
		})
	}
	catch(e){console.log(e);/*$("cw_m").innerHTML=e*/}
}

async function DrefreshFarm()
{
	try
	{
		$("c_sc").innerHTML=`<a
			href="${EXPLORE+f_1_add}"
			target="_blank"
			>${f_1_add.substr(0,6)+"―"+f_1_add.substr(38)}</a>
		`;

		g = new ethers.Contract(f_1_add, farabi, provider);
		ts = g.totalSupply();
		vl = g.tvl();
		/////////////////////////////////
		/*	NOT WORKING!!!!!!!!!!!!!!!
		 *io = g.methods.info().call();
		 *******************************
		 *******************************/

		url=RPC_URL;
		data={"jsonrpc":"2.0","id":9,"method":"eth_call","params":[{"data":"0x370158ea","to":f_1_add},"latest"]}
		let io = (await fetch(url, { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json' } })).json();

		await Promise.all([ts,vl,io]).then(d=>{
			d[0]=Number(d[0]._hex)
			d[1]=Number(d[1]._hex)
			if(d[2].result == undefined) {console.log("error retreiving info!");return}
			console.log("hrllo");
			console.log(d);
			$("c_ts").innerHTML = fornum(Number(d[0]),DECIMAL);
			$("c_mc").innerHTML = "$ "+fornum(Number(d[1]),18);
			$("c_pu").innerHTML = "$ "+fornum( (Number(d[1])/1e18) / (Number(d[0])/(10**DECIMAL)),0);
			oi=[];for(i=0;i< (d[2].result.length-2)/64;i++){oi.push(Number("0x"+d[2].result.substr(2+64*i,64)))}
			console.log("oi",oi);
			$("c_aa").innerHTML = fornum(Number(oi[2]),18)+"%"
			$("c_nr").innerHTML = fornum(Number(oi[1]),18)+"x"
			if(typeof boo25xx == "undefined")
			{
				$("est-hvst").innerHTML = "<b>"+fornum(Number(oi[i-1])*0.01,decEARN)+"</b>"
				if(!(typeof $("est-hvst2") == null || $("est-hvst2") == null))
				{$("est-hvst2").innerHTML = "<b>"+fornum(Number(oi[i-2])*0.01,decEARN)+"</b>"}
			}
			else
			{
				mc = new ethers.Contract(boo25xx[0],[{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],provider)
				Promise.all([mc])
				.then(mcp=>{
					(mcp[0].pendingReward(boo25xx[1],f_1_add))
					.then(pr=>{
						$("est-hvst").innerHTML = "<b>"+fornum(Number(pr)*0.01,decEARN)+"</b>"
					})
				})
			}
		})
	}
	catch(e){console.log(e);$("cw_m").innerHTML="RPC Timed out! Please clear cache & hard refresh (Ctrl+Shift+R / Cmd+Shift+R)<br>"+e;}
}

hello=9991
