'use strict'

const path = require('path')
const keythereum = require("keythereum");
const wanUtil = require('wanchain-util');
const Wanks = require('wanchain-keystore').keystoreDir

function signRawTransaction(tx,from,passwd){
    let kspath = path.join(process.env.HOME,'.wanchain/testnet/keystore')
    const wanks = new Wanks(kspath)
    let WanTx = wanUtil.wanchainTx;
    const keystore = wanks.getAccount(from).keystore
    let keyAObj = {version:keystore.version, crypto:keystore.crypto};
    var privateKey = keythereum.recover(passwd, keyAObj);
    let wtx = new WanTx(tx);
    wtx.sign(privateKey);
    let serializedTx = wtx.serialize();
    return serializedTx
}
exports.signRawTransaction = signRawTransaction;

