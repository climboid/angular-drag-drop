angular.module('myApp', [])
    .directive('draggable', function() {
    return {
        restrict:'A',
        link:function(scope,element,attrs){
           element.draggable({});
        }
    };
}).directive('droppable',function(){
		return{
			restrict:'A',
			link:function(scope,element,attrs){
				element.droppable({
					drop:function(event,ui){
						$( this ).addClass( "ui-state-highlight" ).find( "p" ).html( "Dropped!" );
					}
				});
			}
		};
});
