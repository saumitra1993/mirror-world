
var viewport_center = view.center;
viewport_center.y = viewport_center.y/2;
var head_radius = 50;
var back_length = head_radius*4;
var hand_length = head_radius*4 - 80;
var leg_length = hand_length + 80;
var pivot_radius = 5;
var head = new Path.Circle({
    center: viewport_center,
    radius: head_radius,
    strokeColor: '#000'
});
head.title = "head";
var pivot_neck_center = viewport_center + new Point(0,head_radius);

var pivot_top_head_center = viewport_center + new Point(0,-head_radius);

var pivot_top_head = new Path.Circle({
    center: pivot_top_head_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

var pivot_neck = new Path.Circle({
    center: pivot_neck_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});


var pivot_midback_center = pivot_neck_center + new Point(0, back_length/2);

var upper_back = new Path.Line(pivot_neck_center, pivot_midback_center);
upper_back.title = "upper back";

upper_back.strokeColor = '#000';

var pivot_midback = new Path.Circle({
    center: pivot_midback_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

var pivot_lowback_center = pivot_midback_center + new Point(0, back_length/2);

var lower_back = new Path.Line(pivot_midback_center, pivot_lowback_center);
lower_back.strokeColor = '#000';
lower_back.title = "lower back";

var pivot_lowback = new Path.Circle({
    center: pivot_lowback_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});


// ____LEGS____

var pivot_upper_left_leg_center = pivot_lowback_center + new Point(-20, leg_length/2);
var pivot_lower_left_leg_center = pivot_upper_left_leg_center + new Point(-20, leg_length/2);

var pivot_upper_right_leg_center = pivot_lowback_center + new Point(20, leg_length/2);
var pivot_lower_right_leg_center = pivot_upper_right_leg_center + new Point(20, leg_length/2);

var upper_left_leg = new Path.Line(pivot_lowback_center, pivot_upper_left_leg_center);
upper_left_leg.strokeColor = '#000';

var lower_left_leg = new Path.Line(pivot_upper_left_leg_center, pivot_lower_left_leg_center);
lower_left_leg.strokeColor = '#000';

var upper_right_leg = new Path.Line(pivot_lowback_center, pivot_upper_right_leg_center);
upper_right_leg.strokeColor = '#000';

var lower_right_leg = new Path.Line(pivot_upper_right_leg_center, pivot_lower_right_leg_center);
lower_right_leg.strokeColor = '#000';

upper_left_leg.title = "upper left leg";
lower_left_leg.title = "lower left leg";
upper_right_leg.title = "upper right leg";
lower_right_leg.title = "lower right leg";

var pivot_upper_left_leg = new Path.Circle({
    center: pivot_upper_left_leg_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

var pivot_lower_left_leg = new Path.Circle({
    center: pivot_lower_left_leg_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

var pivot_upper_right_leg = new Path.Circle({
    center: pivot_upper_right_leg_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

var pivot_lower_right_leg = new Path.Circle({
    center: pivot_lower_right_leg_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

//_____HANDS____

var pivot_upper_left_hand_center = pivot_neck_center + new Point(-60, hand_length/2);
var pivot_lower_left_hand_center = pivot_upper_left_hand_center + new Point(-60, hand_length/2);

var pivot_upper_right_hand_center = pivot_neck_center + new Point(60, hand_length/2);
var pivot_lower_right_hand_center = pivot_upper_right_hand_center + new Point(60, hand_length/2);

var upper_left_hand = new Path.Line(pivot_neck_center, pivot_upper_left_hand_center);
upper_left_hand.strokeColor = '#000';

var lower_left_hand = new Path.Line(pivot_upper_left_hand_center, pivot_lower_left_hand_center);
lower_left_hand.strokeColor = '#000';

var upper_right_hand = new Path.Line(pivot_neck_center, pivot_upper_right_hand_center);
upper_right_hand.strokeColor = '#000';

var lower_right_hand = new Path.Line(pivot_upper_right_hand_center, pivot_lower_right_hand_center);
lower_right_hand.strokeColor = '#000';


upper_left_hand.title = "upper left hand";
lower_left_hand.title = "lower left hand";
upper_right_hand.title = "upper right hand";
lower_right_hand.title = "lower right hand";

var pivot_upper_left_hand = new Path.Circle({
    center: pivot_upper_left_hand_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

var pivot_lower_left_hand = new Path.Circle({
    center: pivot_lower_left_hand_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

var pivot_upper_right_hand = new Path.Circle({
    center: pivot_upper_right_hand_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

var pivot_lower_right_hand = new Path.Circle({
    center: pivot_lower_right_hand_center,
    radius: pivot_radius,
    fillColor: '#ebc'
});

pivot_neck.moveAbove(upper_back);
pivot_midback.bringToFront();
pivot_lowback.bringToFront();
pivot_neck.bringToFront();

var createPivotNode = function(obj, title){

    obj.FirstChild=null;
    obj.LastChild=null;
    obj.PreviousSibling=null;
    obj.NextSibling=null;
    obj.Parent =null;
    obj.previousAngle = 0;
    obj.connected_to = [];               //BODY PARTS THAT THE PIVOT IS IMMEDIATELY CONNECTED TO
    obj.title = title;
};

var AddPivotChild=function(child,parent)
{

    child.Parent = parent;

    child.PreviousSibling = parent.LastChild;
    if (parent.LastChild !== null){
        parent.LastChild.NextSibling = child;
    }
    parent.LastChild = child;
    if (parent.FirstChild === null){
        parent.FirstChild = child;
    }
};


// THERE WILL BE TWO DATA STRUCTURES, ONE THAT CAPTURES WHAT PIVOT IS CONNECTED TO WHAT PART
// & ONE THAT CAPTURES RELATIONSHIP AMONGST THE PIVOTS

createPivotNode(pivot_top_head, 'top head pivot');
createPivotNode(pivot_neck, 'neck pivot');
createPivotNode(pivot_midback,'mid back pivot');
createPivotNode(pivot_lowback, 'lower back pivot');
createPivotNode(pivot_upper_left_leg, 'upper left leg pivot');
createPivotNode(pivot_lower_left_leg, 'lower left leg pivot');
createPivotNode(pivot_upper_right_leg, 'upper right leg pivot');
createPivotNode(pivot_lower_right_leg, 'lower right leg pivot');
createPivotNode(pivot_upper_left_hand, 'upper left hand pivot');
createPivotNode(pivot_lower_left_hand, 'lower left hand pivot');
createPivotNode(pivot_upper_right_hand, 'upper right hand pivot');
createPivotNode(pivot_lower_right_hand, 'lower right hand pivot');


AddPivotChild(pivot_top_head, pivot_neck);
AddPivotChild(pivot_upper_left_hand, pivot_neck);
AddPivotChild(pivot_upper_right_hand, pivot_neck);
AddPivotChild(pivot_lower_left_hand, pivot_upper_left_hand);
AddPivotChild(pivot_lower_right_hand, pivot_upper_right_hand);
AddPivotChild(pivot_neck, pivot_midback);
AddPivotChild(pivot_midback, pivot_lowback);
AddPivotChild(pivot_upper_left_leg, pivot_lowback);
AddPivotChild(pivot_upper_right_leg, pivot_lowback);
AddPivotChild(pivot_lower_left_leg, pivot_upper_left_leg);
AddPivotChild(pivot_lower_right_leg, pivot_upper_right_leg);


pivot_top_head.connected_to.push(head);
pivot_neck.connected_to.push(head, upper_left_hand, upper_right_hand, upper_back);
pivot_midback.connected_to.push(upper_back, lower_back);
pivot_lowback.connected_to.push(lower_back, upper_left_leg, upper_right_leg);

pivot_upper_left_leg.connected_to.push(upper_left_leg, lower_left_leg);
pivot_lower_left_leg.connected_to.push(lower_left_leg);
pivot_upper_right_leg.connected_to.push(upper_right_leg, lower_right_leg);
pivot_lower_right_leg.connected_to.push(lower_right_leg);


pivot_upper_left_hand.connected_to.push(upper_left_hand, lower_left_hand);
pivot_lower_left_hand.connected_to.push(lower_left_hand);
pivot_upper_right_hand.connected_to.push(upper_right_hand, lower_right_hand);
pivot_lower_right_hand.connected_to.push(lower_right_hand);


var figure_group = new Group([head, upper_left_hand, upper_right_hand, lower_left_hand, lower_right_hand, upper_back, lower_back, upper_left_leg, upper_right_leg, lower_left_leg, lower_right_leg]);

var queue = [pivot_lowback];

while(queue.length > 0){
    console.log(queue);
    var obj = queue.pop();
    obj.onMouseDrag = function(event){
        var obj = event.target;
        var children;
        console.log(obj.title);
        var current_pos = event.point;
        var previous_vector = obj.position - obj.Parent.position;
        console.log(obj.Parent.title);
        console.log(previous_vector.x + "," + previous_vector.y);
        var new_vector = current_pos - obj.Parent.position;
        console.log(new_vector.x + "," + new_vector.y);
        var angle = previous_vector.getDirectedAngle(new_vector);
        var rotate_by = angle - obj.previousAngle;
        obj.previousAngle = angle;
        console.log(angle);
        if(obj.FirstChild == null){
            children = [obj];
        }else{
            children = getAllChildren(obj);
        }
        console.log(children);
        var connected_to_union = obj.connected_to;
        console.log(connected_to_union);
        for(var i = 0;i < children.length; i++){
            connected_to_union = arrayUnion(connected_to_union, children[i].connected_to, areObjectsEqual);
        }
        console.log(connected_to_union);
        for(var j = 0;j < connected_to_union.length; j++){
            part = connected_to_union[j];
            part.rotate(rotate_by, obj.Parent.position);
        }
    };
    var immediate_children = getImmediateChildren(obj);
    for(var k = 0;k < immediate_children.length; k++){
        queue.push(immediate_children[k]);
    }

}


function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function getImmediateChildren(obj){
    var children = [];
    var node = obj.FirstChild;
    while(node != null){
        children.push(node);
        node = node.NextSibling;
    }
    console.log(children);
    return children;
}

function getAllChildren(obj){
    var children = [];
    if(obj.FirstChild == null){
        return [obj];
    }
    var node = obj.FirstChild;
    while(node != null){
        bacche = getAllChildren(node);
        console.log(bacche);
        for(var i = 0;i < bacche.length; i++){
            children.push(bacche[i]);
        }
        children.push(node);
        node = node.NextSibling;
    }
    return children;
}


function arrayUnion(arr1, arr2, equalityFunc) {
    var union = arr1.concat(arr2);

    for (var i = 0; i < union.length; i++) {
        for (var j = i+1; j < union.length; j++) {
            if (equalityFunc(union[i], union[j])) {
                union.splice(j, 1);
                j--;
            }
        }
    }

    return union;
}


//
//var head = new Path.Circle({
//    center: viewport_center,
//    radius: 50,
//    strokeColor: '#000'
//});
//
//var neck = viewport_center + new Point(0,50);
//var torso = from + new Point(0, 80);
//var back = new Path.Line(neck, torso);
//back.strokeColor = 'black';

//var p2 = viewport_center + new Point(100, 0);
//var line1 = new Path.Line(viewport_center, p2);
//line1.strokeColor = 'black';
//
//
//var p3 = p2 + new Point(60, -70);
//var line2 = new Path.Line(p2, p3);
//line2.strokeColor = 'black';
//
//var line1_vector = p2 - viewport_center;
//var line2_vector = p3 - p2;
//
//var forearm_angle = line1_vector.getAngle();
//
//console.log("Forearm angle : " + forearm_angle);
//
//var previous_angle = line1_vector.getDirectedAngle(line2_vector);
////console.log(angle);
//
//var handle = new Path.Circle({
//    center: p3,
//    radius: 10,
//    fillColor: '#ebc'
//});
//
//handle.onMouseDrag = function(event){
//
//    var current_pos = event.point;
//    var temp_line2_vector = current_pos - p2;
//    var angle = line1_vector.getDirectedAngle(temp_line2_vector);
//
//    console.log(angle);
//    var rotate_by = angle - previous_angle;
//
//    if(angle - forearm_angle >= 1){
//        line1.rotate(rotate_by, viewport_center);
//        line2.rotate(rotate_by, viewport_center);
//        line1_vector = line1.lastSegment.point - viewport_center;
//    }
//    else{
//        line2.rotate(rotate_by, line1.lastSegment.point);
//    }
//    handle.position = event.point;
//    previous_angle = angle;
//
//}
