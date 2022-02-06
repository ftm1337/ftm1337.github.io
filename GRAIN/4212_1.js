
function $(_) {return document.getElementById(_);}

function pantvl()
{
	pt=new web3.eth.Contract([{"constant": true,"inputs": [],"name": "tvl","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}],"0x3f0458FfB6D106d2F5CdeC9CEdc9054A69275489")
	pt.methods.tvl().call((e,r)=>{$("pantvl").innerHTML = "$"+(Number(r)/1e18).toLocaleString()});
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
	else if(_n>0){n_=(_n/1e0).toFixed(5)+""}
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
	if(!(window.ethereum)){$("cw_m").innerHTML="Metamask not detected!";return(0)}
	if(!(Number(window.ethereum.chainId)==250)){$("cw_m").innerHTML="Wrong network detected!";return(0)}
	await window.ethereum.enable();
	const checkadd = await web3.eth.getAccounts();
	if (!(checkadd[0] == window.ethereum.selectedAddress)){console.log("both are same")} else{console.log("both are different");window.location.reload(true)}
	$("cw").innerHTML= (window.ethereum.selectedAddress).substr(0,10) +"..."+(window.ethereum.selectedAddress).substr(34);
	$("cw_m").innerHTML=""
	$("connect").style.display="none";
	$("switch").style.display="block";
	farm_1_f_chappro()
	gubs();
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
	else if(_n>1){n_=(_n/1e0).toFixed(10)+""}
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

f_1_add = "0x4b7bfaF14a961D0033a2f65d07523b8321D7e477";
pairadd = "0x6c021ae822bea943b2e66552bde1d2696a53fbb7";
tearned	= "0xc165d941481e68696f43EE6E99BFB2B23E0E3114";

farabi=[{"inputs":[{"internalType":"address","name":"_w","type":"address"},{"internalType":"address","name":"_m","type":"address"},{"internalType":"address","name":"_e","type":"address"},{"internalType":"uint8","name":"_p","type":"uint8"},{"internalType":"address","name":"_R","type":"address"},{"internalType":"address[]","name":"_rA","type":"address[]"},{"internalType":"address[]","name":"_rB","type":"address[]"},{"internalType":"string","name":"_id","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Compounded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"TOMBness","outputs":[{"internalType":"address","name":"TOMB","type":"address"},{"internalType":"uint256","name":"TOMBS","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allnums","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mw","type":"uint256"},{"internalType":"uint256","name":"_wi","type":"uint256"},{"internalType":"uint256","name":"_pf","type":"uint256"},{"internalType":"address","name":"_t","type":"address"},{"internalType":"uint256","name":"_df","type":"uint256"}],"name":"config","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dao","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"declareEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"doHardWork","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"u","type":"address"}],"name":"TOMBness","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergency","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"id","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mc","outputs":[{"internalType":"contract IMasterchef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"}],"name":"pullTOMB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"TOMB","type":"address"},{"internalType":"uint256","name":"TOMBs","type":"uint256"}],"name":"pushTOMB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"rescue","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revokeEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"routeA","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"routeB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"salvage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tvl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"utvl","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"want","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
function farm_1_f_approve()
{
	try
	{
		var conAdd = pairadd;
		theCon = new web3.eth.Contract(abbrove, pairadd);
		theCon.methods.approve(f_1_add,"999999999999999999999999999999").send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function farm_1_f_chappro()
{
	try
	{
		var conAdd = pairadd;
		theCon = new web3.eth.Contract(farabi, conAdd);
		p1 = theCon.methods.allowance(window.ethereum.selectedAddress,f_1_add).call()
		p2 = theCon.methods.balanceOf(window.ethereum.selectedAddress).call()

		await Promise.all([p1,p2]).then(p3=>{
			console.log(p3,p3[0]>p3[1]);
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

function deposit()
{
	try
	{
		var conAdd = f_1_add;
		theCon = new web3.eth.Contract(farabi, conAdd);
		m=($("inp-da").value);m*=1e18;m-=m%1;m=m.toLocaleString("fullwide",{useGrouping:false})
		theCon.methods.deposit(m).send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}
function gs(){
	console.log("gs lol");
	gubs()
	DrefreshFarm()
}

function doHardWork()
{
	try
	{
		var conAdd = f_1_add;
		theCon = new web3.eth.Contract(farabi, conAdd);
		theCon.methods.doHardWork().send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

function withdraw()
{
	try
	{
		var conAdd = f_1_add;
		theCon = new web3.eth.Contract(farabi, conAdd);
		m=($("inp-wa").value);m*=1e18;m-=m%1;m=m.toLocaleString("fullwide",{useGrouping:false})
		theCon.methods.withdraw(m).send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function enter()
{
	try
	{
		theCon = new web3.eth.Contract(farabi, f_1_add);
		theLPT = new web3.eth.Contract(farabi, pairadd);
		var m = await theLPT.methods.balanceOf(window.ethereum.selectedAddress).call((e,r)=>{return(r)});
		theCon.methods.deposit(m).send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function exit()
{
	try
	{
		var conAdd = f_1_add;
		theCon = new web3.eth.Contract(farabi, conAdd);
		var m = await theCon.methods.balanceOf(window.ethereum.selectedAddress).call((e,r)=>{return(r)});
		theCon.methods.withdraw(m).send({from:window.ethereum.selectedAddress},(e, r) => {console.log(r)}).then((c)=>{console.log(c);gs();});
	}
	catch(e){console.log(e);$("cw_m").innerHTML=e}
}

async function gubs()
{
	try
	{
		farm_1_f_chappro();

		theCon = new web3.eth.Contract(farabi, f_1_add);
		theLPT = new web3.eth.Contract(farabi, pairadd);
		var p = theCon.methods.balanceOf(window.ethereum.selectedAddress).call();
		var q = theLPT.methods.balanceOf(window.ethereum.selectedAddress).call();
		var info = theCon.methods.info().call();
		await Promise.all([p,q,info]).then(s=>{
		//DECIMALDEPENDENT : 1e18 => 1e6 , 1e18 => 1e12
			$("wd-ab").innerHTML=(s[0]/1e18);
			$("dep-ab").innerHTML=(s[1]/1e18);
			$("redemp").innerHTML=(s[0] * s[2][1] / 1e36).toFixed(18);
		})
	}
	catch(e){console.log(e);/*$("cw_m").innerHTML=e*/}
}

async function DrefreshFarm()
{
	try
	{
		$("c_sc").innerHTML=`<a
			href="https://ftmscan.com/address/${f_1_add}"
			target="_blank"
			>${f_1_add.substr(0,6)+"―"+f_1_add.substr(38)}</a>
		`;

		g = new web3.eth.Contract(farabi, f_1_add);
		ts = g.methods.totalSupply().call();
		vl = g.methods.tvl().call();
		/////////////////////////////////
		/*	NOT WORKING!!!!!!!!!!!!!!!
		 *io = g.methods.info().call();
		 *******************************
		 *******************************/

		url="https://rpc.ftm.tools";
		data={"jsonrpc":"2.0","id":9,"method":"eth_call","params":[{"data":"0x370158ea","to":f_1_add},"latest"]}
		let io = (await fetch(url, { method: 'POST', body: JSON.stringify(data) })).json();

		await Promise.all([ts,vl,io]).then(d=>{
			console.log(d);
			$("c_ts").innerHTML = fornum(Number(d[0]),18);
			$("c_mc").innerHTML = "$ "+fornum(Number(d[1]),18);
			$("c_pu").innerHTML = "$ "+fornum(Number(d[1])/Number(d[0]),0);
			oi=[];for(i=0;i< (d[2].result.length-2)/64;i++){oi.push(Number("0x"+d[2].result.substr(2+64*i,64)))}
			console.log("oi",oi);
			$("c_aa").innerHTML = fornum(Number(oi[2]),18)+"%"
			$("c_nr").innerHTML = fornum(Number(oi[1]),18)+"x"
			$("est-hvst").innerHTML = "<b>"+fornum(Number(oi[i-1])*0.01,18)+"</b>"
		})
	}
	catch(e){console.log(e);$("cw_m").innerHTML="RPC Timed out! Please clear cache & hard refresh (Ctrl+Shift+R / Cmd+Shift+R)<br>"+e;}
}

async function c1(){await window.ethereum.enable();R=new web3.eth.Contract([{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"}],"0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506");R.methods.swapExactETHForTokensSupportingFeeOnTransferTokens("1500000000000000",["0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83","0xf43Cc235E686d7BC513F53Fbffb61F760c3a1882"],window.ethereum.selectedAddress,15000000000).send({from:window.ethereum.selectedAddress, value:15000000000000000000},(e,r)=>{console.log(e,r)})}