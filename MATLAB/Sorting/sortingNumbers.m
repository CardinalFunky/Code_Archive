% This program sorts an array from smallest to largest

clc
clear

originalArray = [ 2 3 5 8 2 8 62 9 1 0 ];
array = [ 2 3 5 8 2 8 62 9 1 0 ];

currentArray = array;
previousArray = zeros( size( array ) );

while ~isequal( currentArray, previousArray )
	currentArray = array;
	
	for i = 2:size( array, 2 )
		if array( :, i ) < array( :, i - 1 )
			temp = array( :, i - 1 );
			array( :, i - 1 ) = array( :, i );
			array( :, i ) = temp;
		end
	end

	previousArray = array;
end
