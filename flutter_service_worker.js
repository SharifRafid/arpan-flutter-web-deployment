'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "41f6cb1a8ad9a7aa23b2dee680f05a15",
".git/logs/HEAD": "a1754c5cd5b907837259a519898d64e9",
".git/logs/refs/remotes/origin/main": "e8950f1e3e79f3e0ed7a5c124f41b732",
".git/logs/refs/heads/main": "bee6563b4bc4033314ad82c98d734773",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/77/6ada85cbfd9ba5c60785a24b7b75db07ff9481": "37823c2afcdb76f9fd8d47c7c0c5638c",
".git/objects/73/7baf7336096d1974b8f56e6786b1db5353157a": "a230025c425c4890f26a3c2adfe381b8",
".git/objects/3a/5853cebd6c4b27b79fe67239b8f04977abcdf8": "29b01643feac5082b43fa8405d17a530",
".git/objects/a0/2b2bc63b693368382b2b42e02ca1c87ad350b4": "ae6db71d0650cb708512b4f4e62b255b",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/11/a080af9e1904fe7cc082947d533368f594026a": "b54abdd8c00bffba99c1f84279e99e0b",
".git/objects/c7/2181ea2bf981283b0755b3a760b3ac570c6490": "cc74e1ba894ce27713390dda0772cb57",
".git/objects/c7/95b9434d6cf4198387266c483b28e82798aff1": "f425dc2141b4449a1e5219ff40ae4b67",
".git/objects/c7/96e3ae4138c3b61c9fd2915ca2ed16272e117c": "b48355c8712e76c2a5bbb04135df843f",
".git/objects/fe/17602293a3b55a037f1053dd78f0f9d0e6d5df": "2e37458113bb2a8f3de2f4f430edc4b5",
".git/objects/fe/5824caef82ee5d3d3ef627855cd938bd47fb9d": "37d4d95adfabca01b8dee9b321a4f420",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/99/4f82608a2375b2c64fa44c497cc2802de3535c": "09a05173f4418dafd1ef6e060111be19",
".git/objects/12/f64c7c06eca64372dfb2b68dc62167e66f2fa1": "b4778f71490545d041e33ac17b28c43e",
".git/objects/12/71c9e9c163875441e82d8b6e7bde269fd575c1": "fdc79640e40c1d1cd8f443b98c730761",
".git/objects/87/145e932414cc89ce298fd00ab382385ac5b036": "bd47602434fa53d17aec99838ddd8601",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/03b40eaf495f148d5d0d1cc541b5322d5c4b7c": "6fa2fdb55e734d4228a43ef933e587a8",
".git/objects/5e/fde7dda77c51a057779a7eb080100fcbe46261": "34e9b3e029ef1c930dd61f1b66e8cefc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/31/899ab467bb6c89f5aaed3e18e307da65fc7be2": "b9bd21b25ae23d40543a1b6958234e72",
".git/objects/90/77dc5a3b740fbab4480e0adf3dce960bde718b": "14b0786eb7fe57b69b2a4f6583657edd",
".git/objects/18/e3f7126e00e873467181fcf41b2440f94e497f": "570baba00bc4c6f907a6bf9c532be9fa",
".git/objects/a7/6c07325ed72cd0f5a1ce271254bb1b64aee64d": "7a5bdbcc041ed2bae9c70555bbe9c018",
".git/objects/df/39ccc964d363e559c1111fb21e3776b98fd924": "c5b413c152f972a4221dfb4557f8646e",
".git/objects/df/174e8ce1c2a5067137ef5611ff227eb8102b76": "f4b50dca4b75ddf09090c36a28b2a20b",
".git/objects/df/c645fb88c7f79de96e6beb5de45833f3e3f69d": "c22e01fda99e1db15d85c918468e6e54",
".git/objects/b9/53382a5010c291bfee57a133f5c794ad73969b": "18c8f69710377cd379dd8e8c9f8c2331",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/8beeaa708f974657eaa4f5a3b0fb3adca4ba1c": "fe264563c1d73a3d56da12f08410bfff",
".git/objects/4c/820c8135cc1030c3f1ed8d99b4eb7f5ff18fa5": "2acbab1b402b8ce64ab7c580d491c1ae",
".git/objects/4c/4d68ea26e4923b9f4869dce42231d482734e64": "c67414a4bdd1fcc799e21e8b978e124a",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/8f58cef8f4844db13db3ffb1bd8b7888c9d261": "e8c8acb7f2d53e12c6e0bd331a62e123",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/a3/ae6fac262c97c393214b581901c21a70f28111": "cc064cffad879acf81c4969203425985",
".git/objects/03/caa788979823016069c3ba543a29683f58ccf3": "2d1264e6b94df23cf72e2685963e8a20",
".git/objects/69/c84c299c6872b09b474514111664a056ae0f60": "7be31cb5fbd254be2b3f747350bba73e",
".git/objects/9d/9e6cc2d43a6d223a14a24dbd880034c4836973": "2cc6c2618c31c2c99207e15972663a83",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/3b/53813900f4b631c8ff512159c344a32a469522": "9da09e867db8a8312fc8bab691b6300d",
".git/objects/07/a2ec8002e824f5b779a0858899ccd39fca6783": "ef57a354fa42b8021d5dc62b842c48e3",
".git/objects/b6/d54936312cb1860c01b2ded674510b2401ced2": "13bcce14b4f433ed669770f29a369b15",
".git/objects/21/14e764d865f6687b7f1bf30c4ceef38ba004d2": "b64ec6ad9fbbe605ab29515dfd006219",
".git/objects/9e/9d2628dc400808d43ea254ad49bae8d639a8c1": "3a278d104e0edaad9e4d3df5485116e1",
".git/objects/2c/0e04354c257a9184cd53d7276d946bdf27c0d3": "36fae22e0b96f443cf673ab12a3fda7e",
".git/objects/d3/a8762762e8273d35a458d01ea3bb3ea62cfb29": "6a6afe277fa2dadddbff29f37143b0c5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/74/41cc41922d1aae10855ece6e799bb6f9d9e352": "78d2b2db7e6d6bde301e11b819d2f439",
".git/objects/74/cd12147bc5de95864721d0297d79f6226e1de1": "0f132e2f6145d2ef78b784d85f8c9601",
".git/objects/3e/7588a4b9cc6ccc088f712a7b49595dfe49590b": "9a59db4717761301d8df1f98d74f655b",
".git/objects/ee/d33ac7df1bae5229b02258198f70df60e37fac": "624ec6ecf1e08927c519393b7e94dd23",
".git/objects/4e/42740879233c12fd93a6181d8f0ad004d5fe99": "273e66335cd7a2ba6b417de44fdfcb40",
".git/objects/4e/f37882598df022c80dff38af38676174e06fe6": "041fd4623206fca59b2ed65a2d8c4b97",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/a6/6034b26ecdcc91cd021dac7f791eaef3207ee8": "a8966a4ad45133507d9b558cfb9d02f4",
".git/objects/be/699c24c77570a2223900b84708a42d241983bb": "21629a044c3ecb5d11628269b399d14d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/81/bff389cef15edeeda4dbd523fba9711ff26dc0": "7ab3c3eadc3d83f7da001e586af9348b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/0249138efa17753dd2c7fbc6bea42addea42a6": "639ea39be4c55aba33403e448551db16",
".git/objects/45/a4cbe186b19838ae942628acdcbb796d93abdb": "bfd9f858996d5c51b4ae82fa8f15b2b1",
".git/objects/1c/359eca5a24ea6f0aa4bb70d57c21643a1997b8": "df6b1ba83bdae180e818132e0813b020",
".git/objects/3c/d1ae2710367a8811f787d5d0c80411e8ef1e23": "7f5af2e312dbe0e69ad283d6a2168ca5",
".git/objects/70/b50985f19715eb38b3cbce55ee7f6258ffd61d": "9fcc74f479dc863b9acf145870f265ac",
".git/objects/70/50e7351554ec374a99251cc8cfea6f5018c2b2": "55f276ebb96f5e1ef38674e19a94ec5e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/8e/2c780741c0f0ec891ac889b2808ea86bc61f30": "b4fa99838f812ede3d56f345887c199f",
".git/objects/13/7c221daec0556b5043ac1948e1d3f5ba1674c0": "c92b9cbf82a3e0f929a5d19b11e68677",
".git/objects/66/df6b73cb9cc666b1c6a13f94ecf9bba425d0d9": "a54d999b2160fc33189af5f3af92df50",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/0b/7b2c8d3a17f0656ca7c974a3e93c4505eb061d": "4d6f180e0e1ed82d71a24f2f1ceffec1",
".git/objects/5c/88b37814371dd07d15e1e233a6a302a18088aa": "ebf3a7f1c52fe3689a9e3b3b3dd6625d",
".git/objects/5c/b4a95c28b6640b3477499b0a77593d437d48ae": "20301da0e000534291f7951bd855de4a",
".git/objects/5c/b8a0104e39a864c046a3343ed3b011bdad42ca": "7c695a7712900c473250c09d4fc9884e",
".git/objects/5c/24788afea406c2d73b070c9c4363bbcf8b0a47": "03e03d2264763f0dd418df0191455c40",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/612ee449f05332f52c3d0ece27efb2ae74f674": "8c6ba2fae1a228f9bbb9867536998cac",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/f9/3b65fb547c74c6181c868962d3fb6cc33b3efd": "80305657484c6efbf3c9e1a385c63355",
".git/objects/2a/1ac196d28571caa281aabb3898800ebfca73c6": "4a57b8f2eb58f764280a3afe7da66849",
".git/objects/83/9a13861f6884717662739c4235eaa39c33a791": "317654b82d7625be1d23dde18fa0dcb3",
".git/objects/83/c721de2c3ab133933bb79b2d3c59d262dda96e": "f2634d5409ae32cbfef2a3eb6357faab",
".git/objects/85/541e1525d55f9288eef5c3e2caf6a8b57c1aad": "c2b0ca73e20cd15ca894c172b99f9087",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/71/3d071f4e6e953b8a0a412f67f74cd82c52bfab": "1025116125dc0b51a46162ed3665ee49",
".git/objects/62/6ce3d77c51eb84ee023134ea0f2aed5647f971": "c1b62b80adcfd920d1bf1c65827d0826",
".git/objects/f0/ed80aa15bf15114f88a91e0052b713d985fc10": "f1d4c595ce1d228cbd976ebdf24d9257",
".git/objects/f0/bd0b328027d6280c39d4edc887ded96819052e": "6a9d87882241266c381fedba46452647",
".git/objects/91/e614d05c622a311a9b6a422f770e318b2e1c56": "93a6e082c9422323d867d06f7cfd790a",
".git/objects/91/7486068527ba09d9200ccf94768e2ae64cc035": "e30e3ad8f753ce92b760197238ab034c",
".git/objects/c8/d0a883816c2b96cea9cd8b356000c13a132087": "56488ccfcb5c7ddbf8e4b72275bf8fcf",
".git/objects/ca/87071606d80f30c2e253736b15be915302804e": "dcd3f9f7742945981cbe1ff1a948d57b",
".git/objects/ca/67481919af6f5b589907b50fc67c5f0b015462": "6348c796324458fe8691334544ecee91",
".git/objects/5b/841a90cd223f15544217fa175234ad7ab14c3b": "b1a7af310420dde836531021d9ef5f17",
".git/objects/00/f0ec0e47d794612db55dbb0561315c682744d9": "f7414e27525f5eb0671c03a5961321a4",
".git/objects/22/86e526cfe546712b0bc4416cdca2218e5e018a": "beb0c1edcca092430277a2e6da8ec035",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/86/93f5c9578f1a9a8b6c6e0c29df558d717be907": "612eb3952f8f59c12844e4f6fe9b57c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/8020506b46f275c16f73209e5eb971c4e3921d": "10a99174aa1155b0afb954ebe2585db9",
".git/objects/48/a9b28703bfe0ab09c8e2f73fc3a993b681908d": "290c76a5f786b976d92900afd84b3eaa",
".git/objects/48/86df7edf3b01489764a63860025cc8f4f1c4d9": "ced599b3cc55a8837ed7ea39f8df24c6",
".git/objects/d5/558b38953b1d147faaa5c772b3e8e90a49e2b7": "6a2578e94234cafdce0da3fa4f07b6b0",
".git/objects/2b/cb92a866988f9577be4fcc04b170687ce0203f": "d52a126ea94a9345afc53cdad96cf922",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/06/76180b8143c0a40a96acae9bf18b56de039269": "5eaa3be1380b5c113515020d36d4cb38",
".git/objects/e1/51059f236e0c407fd6d1c0d62a8fdee1988d50": "3ffa8bc4721ef94e64ab23d7671137fd",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/79/44dd5384610b1fd17423d732547220c2f80d56": "1ed25136d80bf50d29f96f7e768d7d8e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/a9/57fde7406e79a7883f9f6a42758b9ffdf000c1": "dee45ba88c3dc85a1b3b22198f26ce0a",
".git/objects/51/4f13d0f1a977578a35c0680f8a160175dafcd8": "2db8fac5ccd5359951a7fc573ea3f56b",
".git/objects/f6/4282a8d94798e7d5510f612103225859d76e02": "de3896fc2c13153b0fa9bcb488a0f55f",
".git/objects/f6/bfbd760849729b71c9eccf6e4e5011b67f246c": "7896f4f66f1bf2311880f5deb4a82af5",
".git/objects/2e/f449a32405ae34a864d8142bf67fcdc4f3f6eb": "16b269fd18508c730b00ab02c861c36b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/0792e58fadbf9b863391bbb7591660145ce88e": "63d516276e45811ccd422cb03a9b2ab4",
".git/objects/50/9e3cd8a4afb64bf1bba91f6137d4550dff85cd": "6a9884ebf978b284b810ef8fc78de0f4",
".git/objects/ec/c0743f0b9f04896a465cbfe1efc7391316e3d6": "91cbb4931ec89f1c974145bc0fcf3cfb",
".git/objects/47/a254d58c9fb38a47032158c93864ff3f989cac": "927d4c7b28be29e2bfa391a63166706b",
".git/objects/33/7d06605b25b9e716782bdee4ad65ec1054ae07": "8e4686776c5665cb242741b3d5d1aaf9",
".git/objects/44/6a069e8845c97aea329640c18f4f6160faba11": "3ca912ec9f08bc7349094b10c9936f52",
".git/objects/44/ffe187f44374849a5ad4b11e1b63d0d03c7642": "6d983ef0eb5c59fa0a02ad313e8f980b",
".git/objects/8d/59da8262953b893825c067a488ac773091ae26": "3ac1860c96c0175b38bc2f1c55ddcc0f",
".git/objects/f4/3e76bc5e90003d48cfd9a6aa05fda207fe0645": "fe3c14bced6032dc685e5800b0a92451",
".git/objects/0c/1ba70313d7c3e72111e7aa42e58e124c4c8125": "2535beb52ec40d43dfae494ea555b11e",
".git/objects/af/7c73f8724c776c6ed780518af24e4b47ca8b33": "afdf6381692f7ca2538401f9da491e58",
".git/objects/1d/ffecc97ddc3b272d395a4d6f0dbe1b90d64ef4": "97df7402c2e070ac36ba8c41bcb134c1",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/dc/8851ce4fc3e1e30b774932b41776cc9d2c264b": "a28d1d08844cae806754099298683103",
".git/objects/c4/343e9c10eb39b64054382f369746b292b30124": "ae1500f9b46792b84d3ffcc7ebcbc0f5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "f90ba5d86cbf116cefb812f331a90ce3",
".git/refs/heads/main": "f90ba5d86cbf116cefb812f331a90ce3",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/COMMIT_EDITMSG": "191baba2e5dc7a32783c65a11db80a34",
".git/index": "fd93b142d5bda0ce5afae05b5ab43b0f",
".git/config": "5e8b8e18eb91bf77a274abe4946b1b7c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5f8a2ed8e62abc3ee9a6a29407503c1a",
"firebase-messaging-sw.js": "f7a911a649349b2b0f1f0e6b36036f0e",
"version.json": "84cc1d4f0a57dbbeeeab5cf9e4af0c8f",
"assets/AssetManifest.json": "da3303e8a3d0d094476c368fc4b40b41",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/fonts/hind_siliguri_font.ttf": "a8d8f1d83c427fcc7a34593e92ecd093",
"assets/assets/images/person_icon.png": "6923a4821d602281cc9b3d46c0d764f9",
"assets/assets/images/Default_Image_Thumbnail.png": "df7d468e33e2b54f732c1471e9c68416",
"assets/assets/images/transparent.png": "d5f92b134ca045a60e0103f08001a07b",
"assets/assets/images/app_icon.png": "5f8a2ed8e62abc3ee9a6a29407503c1a",
"assets/assets/images/cover_icon.png": "5007832d2141812eb7a1bfad0e84621d",
"assets/assets/images/bkash_logo.png": "af331bc1c29f4c1953f60fe35e69cc8e",
"assets/assets/images/arpan_logo.png": "fe1daf25e2c977848d8765a3fe1849b9",
"assets/shaders/ink_sparkle.frag": "1043d8ea18b5bd0e21f60409da183aeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "514f34c137ee1fba3cb37eee09936f16",
"assets/FontManifest.json": "79f344f9172a3616425edc61df7e1c99",
"styles.css": "0967444db9d8b7d86fc30e7c60c3b721",
"index.html": "b4704bdae6c0784ff9e086182f7bd34d",
"/": "b4704bdae6c0784ff9e086182f7bd34d",
"img/loading.gif": "dac49420b69d4bb6da5d2ade0b1ae68e",
"img/arpan_logo.png": "fe1daf25e2c977848d8765a3fe1849b9",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "db84ae9375048eb589006209e544459c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
