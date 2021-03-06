var test = require('testling');
var host = process.argv[2];
var port = parseInt(process.argv[3], 10);

test('cats and dogs', function (t) {
    t.log([ host, port ]);
    t.log(typeof DNode);
    
    DNode.connect(host, port, function (remote) {
        remote.cat(function (theCatSays, dog) {
            t.equal(theCatSays, 'meow');
            
            dog(function (theDogSays) {
                t.equal(theDogSays, 'woof');
                t.end();
            });
        });
    });
});
