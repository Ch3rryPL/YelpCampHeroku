var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    {
        name: "Kamping Nocą",
        image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=compress,format&fit=crop&w=1950&h=&q=80&cs=tinysrgb&crop=",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
        {
        name: "Kamping w Górach",
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?dpr=1&auto=compress,format&fit=crop&w=1953&h=&q=80&cs=tinysrgb&crop=",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
        {
        name: "Kamping nad Jeziorem",
        image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?dpr=1&auto=compress,format&fit=crop&w=2159&h=&q=80&cs=tinysrgb&crop=",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Removed campgrounds!");
                //add a few campgrounds
                data.forEach(function(seed){
                    Campground.create(seed, function(err, campground){
                        if(err){
                            console.log(err);
                        } else {
                            console.log("added a campground");
                            // create a comment
                            Comment.create(
                                {
                                    text: "This place is great, but I wish there was internet",
                                    author: "Homer"
                                }, function(err, comment){
                                    if(err){
                                        console.log(err);
                                    } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                    }
                                });
                        }
                    });
                });
        }
    });
}

module.exports = seedDB;