var fs = require( 'fs' );
var oci = require( './oci' );

//
// default callback function
//
var callback = function(data) { console.log(data); };

//
// Set up the auth object
//
var auth={
    tenancyId : 'ocid1.tenancy.oc1..aaaaaaaa3hjb76kw5fmhm6y4tcl5whv2uer6fz2bbfctfxvbdrtwddfdo6qq',
    userId : 'ocid1.user.oc1..aaaaaaaaot7m2xmy4kk55bltdtuyt32eaht7s7aoc2le6ui4xgg56qcw272a',
    keyFingerprint : 'a1:84:3b:8a:28:8a:d6:dc:8e:28:33:26:a6:bf:1b:a9',
    RESTversion : '/20160918',
    //region: 'us-ashburn-1'
    region: 'eu-frankfurt-1'
};
auth.privateKey = fs.readFileSync('/home/opc/nodejs_demo/OCI-Rest-APIs-nodejs/demoatp_s.pem', 'ascii');

//
// set up parameters object
//
var parameters = {
  compartmentId : 'ocid1.tenancy.oc1..aaaaaaaa3hjb76kw5fmhm6y4tcl5whv2uer6fz2bbfctfxvbdrtwddfdo6qq'
};

//
// List autonomous datawarehouses
//
oci.database.autonomousDataWarehouse.list( auth, parameters, callback );

/*
//
// List autonomous datawarehouses and get first id
//
var adwId = '';
oci.database.autonomousDataWarehouse.list( auth, parameters, function(data){
  adwId = data[0].id;
} );
//wait until async call finishes
require( 'deasync' ).loopWhile(function(){return adwId == '';})
console.log( 'autonomous database id: ' + adwId );

//
// change the freeform tags for autonomous datawarehouse using adwID above
//

// set up new parameters
var tags = { "freeformTags" : {"tag1": 123456, "tag2": "yyy", "anotherTag": "aaa" }};
parameters = {
    body : tags,
    autonomousDataWarehouseId : adwId
}
oci.database.autonomousDataWarehouse.update( auth, parameters, callback );

//
//  list all resource Types
//

// Need to change the REST version
auth.RESTversion = '/20180409';
oci.search.resourceType.list( auth, parameters, function(data){console.log(JSON.stringify(data[0]));}  );


//
//  List all available shapes
//
parameters = {
  compartmentId : 'ocid1.tenancy.oc1..aaaaaaaa3hjb76kw5fmhm6y4tcl5whv2uer6fz2bbfctfxvbdrtwddfdo6qq'
};
auth.RESTversion = '/20160918';
oci.core.shape.list( auth, parameters, callback );


//
// Upload file to objectStore
//

// set up the parameter object
parameters = {
      objectName : 'scrown.jpg',
      namespaceName: 'gse00014467',
      bucketName : 'chris_bucket'
    };
parameters.body = fs.readFileSync( '/Users/clbeck/Desktop/images/scrown.jpg');
oci.objectStore.obj.put( auth, parameters, callback );

//
//  List files in objectStore bucket
//

oci.objectStore.obj.list( auth, parameters, function(data){
  for(var i=0; i<data.objects.length; i++ )
    console.log( data.objects[i].name );
} );


//
//  Rename file in objectstore bucket
//

// add body element to parameters
parameters.body = { sourceName : '94927a.jpg', newName : 'xyz.jpg' };
oci.objectStore.obj.rename( auth, parameters, callback );
*/
