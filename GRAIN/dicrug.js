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

	if(!(window.ethereum)){$("cw_m").innerHTML = "Wallet wasn't detected!";console.log("Wallet wasn't detected!");provider = new ethers.providers.JsonRpcProvider(RPC_URL);DrefreshFarm();pantvl();paintcharts();return}
	else if(!Number(window.ethereum.chainId)==CHAINID){$("cw_m").innerHTML = "Wrong network! Please Switch to "+CHAINID;provider = new ethers.providers.Web3Provider(window.ethereum);DrefreshFarm();pantvl();paintcharts();return}
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
	paintcharts()
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
	if(window.ethereum.chainId==250) (new ethers.Contract("0x14ffd1fa75491595c6fd22de8218738525892101",["function getNames(address) public view returns(string[] memory)"],provider)).getNames(window.ethereum.selectedAddress).then(rn=>{if(rn.length>0){$("cw").innerHTML="Hello, <span style='font-family:bold;font-size:1.337em'>"+rn[0]+"</span> ^‿^"}else{$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);}})
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
		return;
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
[{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"wants","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"grains","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"wants","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"grains","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"__ben","type":"address"},{"indexed":false,"internalType":"uint256","name":"__tvl","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"__pf","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"__wi","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"__when","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"__aum","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"__ts","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"__price","type":"uint256"}],"name":"WorkDone","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Eliteness","outputs":[{"internalType":"address","name":"ELITE","type":"address"},{"internalType":"uint256","name":"ELITES","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"alladdr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allb32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allnums","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"apyr","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int256","name":"_n","type":"int256"}],"name":"averageAPRAcrossLastNHarvests","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startIndex","type":"uint256"},{"internalType":"uint256","name":"_endIndex","type":"uint256"}],"name":"calculateAPRUsingLogs","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mw","type":"uint256"},{"internalType":"uint256","name":"_wi","type":"uint256"},{"internalType":"uint256","name":"_pf","type":"uint256"},{"internalType":"address","name":"_t","type":"address"},{"internalType":"uint256","name":"_df","type":"uint256"}],"name":"config","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"customCall","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"customCall","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tos","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"bytes[]","name":"_datas","type":"bytes[]"}],"name":"customCall","outputs":[{"internalType":"bytes[]","name":"retdata","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"dao","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"declareEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"doHardWork","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"earn","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"u","type":"address"}],"name":"eliteness","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergency","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"harvestLog","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvestLogLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"id","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"components":[{"internalType":"uint256","name":"amountLP","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardDebtMorph","type":"uint256"}],"internalType":"struct IMasterchef.UserInfo","name":"","type":"tuple"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExtensionContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mc","outputs":[{"internalType":"contract IMasterchef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"}],"name":"pullElite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"elite","type":"address"},{"internalType":"uint256","name":"elites","type":"uint256"}],"name":"pushElite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"rescue","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revokeEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"salvage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_a","type":"address[]"},{"internalType":"bool[]","name":"_b","type":"bool[]"}],"name":"setExtensions","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tvl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"utvl","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"want","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
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
return;
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
			$("wd-usd").innerHTML=((Number(s[0])/TS*VL)/(10**DECIMAL)).toFixed(DECIMAL);
			$("wd-ab").innerHTML=(s[0]/(10**DECIMAL)).toFixed(DECIMAL);
			$("dep-ab").innerHTML=(s[1]/(10**DECIMAL)).toFixed(DECIMAL);
			$("redemp").innerHTML=(s[0] * aum / (10**(2*DECIMAL))).toFixed(DECIMAL);
		})
	}
	catch(e){console.log(e);/*$("cw_m").innerHTML=e*/}
}

TS=0;VL=0;
async function DrefreshFarm()
{
return;
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
		n5 = (typeof $("c_apr-avgapr-5n") == null ) ? 0 : g.averageAPRAcrossLastNHarvests(5);
		ap = (typeof $("c_apy-projected") == null ) ? 0 : g.apyr();
		/////////////////////////////////
		/*	NOT WORKING!!!!!!!!!!!!!!!
		 *io = g.methods.info().call();
		 *******************************
		 *******************************/

		url=RPC_URL;
		data={"jsonrpc":"2.0","id":9,"method":"eth_call","params":[{"data":"0x370158ea","to":f_1_add},"latest"]}
		let io = (await fetch(url, { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json' } })).json();

		await Promise.all([ts,vl,io,n5,ap]).then(d=>{
			d[0]=Number(d[0]._hex);TS=d[0]
			d[1]=Number(d[1]._hex);VL=d[1]
			console.log("hrllo");
			console.log(d);
			$("c_ts").innerHTML = fornum(Number(d[0]),DECIMAL);
			$("c_mc").innerHTML = "$ "+fornum(Number(d[1]),18);
			$("c_pu").innerHTML = "$ "+fornum( (Number(d[1])/1e18) / (Number(d[0])/(10**DECIMAL)),0);
			if(typeof boo25xx == "undefined") {
				oi=[];
				if((typeof INFODEC == "undefined")) {
					console.log("INFODEC not found!");
					for(i=0;i< (d[2].result.length-2)/64;i++){oi.push(Number("0x"+d[2].result.substr(2+64*i,64)))}
					console.log("oi",oi);
					$("c_aa").innerHTML = fornum(Number(oi[2]),18)+"%"
					$("c_nr").innerHTML = fornum(Number(oi[1]),18)+"x"
					$("est-hvst").innerHTML = "<b>"+fornum(Number(oi[i-1])*0.01,decEARN)+"</b>"
					if(!(typeof $("est-hvst2") == null || $("est-hvst2") == null)) { $("est-hvst2").innerHTML = "<b>"+fornum(Number(oi[i-2])*0.01,decEARN)+"</b>" }
					if(!(typeof $("c_apr-realapr-t") == null )) { $("c_apr-realapr-t").innerHTML = "<b>"+fornum(Number(oi[3])*100,18)+" %</b>" }
					if(!(typeof $("c_apr-realapr-1") == null )) { $("c_apr-realapr-1").innerHTML = "<b>"+fornum(Number(oi[4][0])*100,18)+" %</b>" }
					if(!(typeof $("c_apr-realapr-2") == null )) { $("c_apr-realapr-2").innerHTML = "<b>"+fornum(Number(oi[4][1])*100,18)+" %</b>" }
					if(!(typeof $("c_apr-avgapr-5n") == null )) { $("c_apr-avgapr-5n").innerHTML = "<b>"+fornum(Number(d[3])*100,18)+" %</b>" }
				}
				else {
					console.log("INFODEC found!!!!!");
					oi = ethers.utils.defaultAbiCoder.decode( INFODEC, d[2].result);

					console.log("oi",oi);
					$("c_aa").innerHTML = fornum(Number(oi[2]),18)+"%"
					$("c_nr").innerHTML = fornum(Number(oi[1]),18)+"x"


					$("est-hvst").innerHTML = "<b>"+fornum(Number(oi[oi.length-1])*0.01,decEARN)+"</b>"
					if(!(typeof $("est-hvst2") == null || $("est-hvst2") == null)) { $("est-hvst2").innerHTML = "<b>"+fornum(Number(oi[oi.length-2])*0.01,decEARN)+"</b>" }
					if(!(typeof $("c_apr-realapr-t") == null )) { $("c_apr-realapr-t").innerHTML = "<b>"+fornum(Number(oi[3])*100,18)+" %</b>" }
					if(!(typeof $("c_apr-realapr-1") == null )) { $("c_apr-realapr-1").innerHTML = "<b>"+fornum(Number(oi[4][0])*100,18)+" %</b>" }
					if(!(typeof $("c_apr-realapr-2") == null )) { $("c_apr-realapr-2").innerHTML = "<b>"+fornum(Number(oi[4][1])*100,18)+" %</b>" }
					if(!(typeof $("c_apr-avgapr-5n") == null )) { $("c_apr-avgapr-5n").innerHTML = "<b>"+fornum(Number(d[3])*100,18)+" %</b>" }
					if(!(typeof $("c_apy-projected") == null )) {
						dur=d[4][1]-d[4][2];
						frq=86400*365/dur;
						apy=(1+Number(d[3])/1e18/frq)**frq - 1
						$("c_apy-projected").innerHTML = "<b>"+fornum(apy*100,0)+" %</b>"
						console.log("apc_apy-projected",apy,dur,frq);
					}
					if(!(typeof $("c_gro-projected") == null )) {
						dur=d[4][1]-d[4][2];
						frq=86400*365/dur;
						apy=(1+Number(d[3])/1e18/frq)**frq
						$("c_gro-projected").innerHTML = "<b>"+fornum(apy,0)+" x</b>"
						console.log("apc_gro-projected",apy,dur,frq);
					}
					if(!(typeof $("c_last") == null )) {
						ctl = Math.floor(Date.now()/1000 - d[4][1])
						$("c_last").innerHTML =
							Math.floor(ctl/3600)+"h "
							+Math.floor((ctl%3600)/60)+"m "
							+Math.floor(ctl%60)+"s"
					}
				}
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
// @override gubs()

async function gubs()
{
return;
	try
	{
		farm_1_f_chappro();

		theCon = new ethers.Contract(f_1_add, farabi, provider);
		theLPT = new ethers.Contract(pairadd, farabi, provider);
		var p = theCon.balanceOf(window.ethereum.selectedAddress)
		var q = theLPT.balanceOf(window.ethereum.selectedAddress)
		bal_f = provider.getBalance(window.ethereum.selectedAddress)
		lqdr_ = new ethers.Contract("0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9", farabi, provider);
		wftm_ = new ethers.Contract("0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", farabi, provider);
		bal_l = lqdr_.balanceOf(window.ethereum.selectedAddress)
		bal_w = wftm_.balanceOf(window.ethereum.selectedAddress)
		/*
		var info = theCon.info()
		//ABI for info*() varies per grain
		//Best to do a https-POST instead of json-RPC
		*/
		data={"jsonrpc":"2.0","id":9,"method":"eth_call","params":[{"data":"0x370158ea","to":f_1_add},"latest"]}
		let info = (await fetch(RPC_URL, { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json' } })).json();
		//i// await Promise.all([p,q,info, bal_f, bal_l, bal_w]).then(s=>{
		await Promise.all([p,q,"info", bal_f, bal_l, bal_w]).then(s=>{
			//i// aum = Number("0x" + (s[2].result).substr(66,64));
		//DECIMALDEPENDENT : 1e18 => 1e6 , 1e18 => 1e12
			$("wd-usd").innerHTML=((Number(s[0])/TS*VL)/(10**DECIMAL)).toFixed(DECIMAL);
			$("wd-ab").innerHTML=(s[0]/(10**DECIMAL)).toFixed(DECIMAL);
			$("wd-uz-ab").innerHTML=(s[0]/(10**DECIMAL)).toFixed(DECIMAL);
			$("dep-ab").innerHTML=(s[1]/(10**DECIMAL)).toFixed(DECIMAL);
			//i// $("redemp").innerHTML=(s[0] * aum / (10**(2*DECIMAL))).toFixed(DECIMAL);
			/*i*/ $("redemp").innerHTML="Unavailable";
			$("dep-ab-hz-f").innerHTML=(s[3]/(10**18)).toFixed(18);
			$("dep-ab-hz-l").innerHTML=(s[4]/(10**18)).toFixed(18);
			$("dep-ab-hz-w").innerHTML=(s[5]/(10**18)).toFixed(18);
		})
	}
	catch(e){console.log(e);/*$("cw_m").innerHTML=e*/}
}

HZABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"alladdr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allb32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dao","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feePerMillion","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newfee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"grains","type":"uint256"}],"name":"zapFTM","outputs":[{"internalType":"uint256","name":"grainz","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"grains","type":"uint256"}],"name":"zapLQDR","outputs":[{"internalType":"uint256","name":"grainz","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]
HZAPPER = "0xeDD568357b346D34cF9A44b34d169864c5dEB5d2"
async function zap_f() {
	HZ = new ethers.Contract(HZAPPER, HZABI, signer);
	amt = Math.floor(Number($("inp-hz-f").value)*1e18)
	min = Math.floor(amt/20)
	tx_r = await HZ.zapFTM(BigInt(amt), BigInt(min), {value:BigInt(amt)})
	await tx_r.wait()
	//window.location.reload()
	gubs();
}
async function zap_l() {
	HZ = new ethers.Contract(HZAPPER, HZABI, signer);
	amt = Math.floor(Number($("inp-hz-l").value)*1e18)
	min = Math.floor(amt/20)
	lqdr_ = new ethers.Contract("0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9", ab1, signer);
	pr = await Promise.all([
		lqdr_.allowance(window.ethereum.selectedAddress,HZAPPER),
		lqdr_.balanceOf(window.ethereum.selectedAddress)
	])

	if(Number(pr[0]) < Number(pr[1])) {
		tx_a = await lqdr_.approve(HZAPPER,ethers.constants.MaxUint256);
		await tx_a.wait();
	}
	tx_r = await HZ.zapLQDR(BigInt(amt), BigInt(min))
	await tx_r.wait()
	//window.location.reload()
	gubs();
}
async function zap_w() {
	HZ = new ethers.Contract(HZAPPER, HZABI, signer);
	amt = Math.floor(Number($("inp-hz-w").value)*1e18);
	min = Math.floor(amt/20);
	wftm_ = new ethers.Contract("0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", ab1, signer);
	pr = await Promise.all([
		wftm_.allowance(window.ethereum.selectedAddress,HZAPPER),
		wftm_.balanceOf(window.ethereum.selectedAddress)
	]);

	if(Number(pr[0]) < Number(pr[1])) {
		tx_a = await wftm_.approve(HZAPPER,ethers.constants.MaxUint256);
		await tx_a.wait();
	}
	tx_r = await HZ.zapFTM(BigInt(amt), BigInt(min));
	await tx_r.wait();
	//window.location.reload();
	gubs();

}

UZAPPER = "0x80DF8EcC2Af6452c7ee230aa6269402197832B73";
UZABI = [{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"alladdr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allb32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dao","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feePerMillion","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newfee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amt_g","type":"uint256"},{"internalType":"uint256","name":"mamt_l","type":"uint256"}],"name":"unZapLQDR","outputs":[{"internalType":"uint256","name":"amt_l","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]

async function unzap_l() {
	UZ = new ethers.Contract(UZAPPER, UZABI, signer);
	amt = Math.floor(Number($("inp-uz-g").value)*1e18);
	min = Math.floor(amt*0.9);
	g5400 = new ethers.Contract(f_1_add, ab1, signer);
	pr = await Promise.all([
		g5400.allowance(window.ethereum.selectedAddress,UZAPPER),
		g5400.balanceOf(window.ethereum.selectedAddress)
	]);

	if(Number(pr[0]) < Number(pr[1])) {
		tx_a = await g5400.approve( UZAPPER, ethers.constants.MaxUint256 );
		await tx_a.wait();
	}
	tx_r = await UZ.unZapLQDR(BigInt(amt), BigInt(min));
	await tx_r.wait();
	//window.location.reload();
	gubs();
}


PDO =[]; RD=[];

async function paintcharts() {
return;
	RD = await provider.getLogs({address:f_1_add,topics:["0x0db7a68b5ae8f9feafd9a896acf42b110c0d2e30c340a7f7accf80a9ce5eec9d"],fromBlock:48587407,toBlock:'latest'})
	pd()
	paintall()
}

function pd() {
	for(j=0;j< RD.length;j++) {
		PDO[j]=pdp(RD[j])
	}
	return PDO
}
function pdp(dp) {
	oi = [];
	for(i=0;i< (dp.data.length-2)/64;i++){oi.push(Number("0x"+dp.data.substr(2+64*i,64)))}
	return oi;
}


function paint(el,da,na,la) {

	new Chart(el, {
		type: "line",
		data: {
			datasets: [{
    			data: da,
				label: la,
				backgroundColor: 'rgb(0, 255, 255)',
				borderColor: 'rgb(13, 37, 255)',
			}]
		},
		options: {
    		scales: {
        		x: {
            		type: 'time',
                	time: {
                		unit: 'day'
                	}
        		}
    		},
    		interaction: {
      			intersect: false
    		},
    		plugins: {
				title: {
    				display: true,
    				text: na,
    				padding: {
        				top: 10,
        				bottom: 30
    				}
    			},
    			legend :{
    				display: true,
    			}
            }
    	}
	});

}

function ldtn(n) {	//	ix=time=3
	ix=3;iy=n
	d=pd();
	rob=[]
	for(i=0;i< d.length; i++) {
		rob.push([ d[i][ix] * 1e3, d[i][iy] / 1e18 ])
	}
	return rob
}

function chart_price() {
	t = ldtn(0);
	s = ldtn(5);
	a = [];
	for(i=0;i<r.length;i++) {
		p = [ t[i][1] / s[i][1] ];
		a.push([s[i][0], p])
	}
	return a;
}

function chart_apr() {
	r = ldtn(6);
	a = [];
	for(i=0;i<r.length-1;i++) {
		tgap = r[i+1][0] - r[i][0];
		pgap = r[i+1][1] - r[i][1];
		pr = pgap/r[i][1];
		apr = pr * (365*86400*1e3/tgap) * 100
		a.push([r[i+1][0], apr])
	}
	return a;
}

function chart_apy() {
	r = ldtn(6);
	a = [];
	for(i=0;i<r.length-1;i++) {
		tgap = r[i+1][0] - r[i][0];
		pgap = r[i+1][1] - r[i][1];
		pr = pgap/r[i][1];
		apr = pr * (365*86400*1e3/tgap)
		freq = (365*86400*1e3/tgap);
		apy = ( (1+apr/freq)**freq - 1) * 100
		a.push([r[i+1][0], apy])
	}
	return a;
}

function paintall() {
	paint('mc_tvl',ldtn(0),'Market Capitalization', 'Total Value Locked in USD')
	paint('mc_aum',ldtn(4),'Assets Under Management','in Morpheus-LP Tokens (MPT)')
	paint('mc_shp',ldtn(6),'Accrued Yield, R.O.I., Relative Growth',' Share-Price in MPT')
	paint('mc_sup',ldtn(5),'Total Outstanding Supply', 'in GRAINs')
	//paint('mc_mrp',ldtn(5),'Market Price of GRAIN#5400 (in USD)')
	paint('mc_apr',chart_apr(),'Annualized Percentage Return','Base APR in %')
	paint('mc_apy',chart_apy(),'Annualized Percentage Yield','Rolling APY in %')
	paint('mc_pri',chart_price(),'Open-Market Valuation','Price per GRAIN in USD')
}


hello=9991

