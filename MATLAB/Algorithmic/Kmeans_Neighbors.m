clc
clear

image = imread( 'lena_gray.bmp' ); 
k = 3;

iterations = 0;

height = size( image, 1 );
width = size( image, 2 );

centers = randperm( image( height, width ), k );

previousCenters = zeros( 1, k );

tempDifferenceArray = zeros( 1, k );

ClusImg=zeros(size(image));
MaxIteration=10;
sumInv = 0;

while ( previousCenters ~= centers )
    
 for x = 1:width
    for y = 1:height
        tempDifferenceArray = zeros( 1, k );
        
          for thisK = 1:k
              % inv means 'Included Neighborhood Value'
              sumInv = 0;
              
              if x == 1 && y == 1 % Top - Left corner Average
                  inv = double( image( x:x + 1, y: y + 1 ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              elseif x > 1 && y == 1 && x < width % Top of the image Average
                  inv = double( image( x - 1:x + 1, y:y + 1 ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              elseif x == width && y == 1 % Top - Right Corner Average
                  inv = double( image( x:x - 1, y:y - 1 ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              elseif x == 1 && y > 1 && y < height % Left Side of the image Average
                  inv = double( image( x:x + 1, y - 1:y + 1 ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              elseif x == width && y > 1 && y < height % Right Side of the image Average
                  inv = double( image( x - 1:x, y - 1:y + 1 ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              elseif x == width && y == height % Bottom - Right Corner Average
                  inv = double( image( x:x - 1, y:y - 1 ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              elseif x == 1 && y == height % Bottom - Left Corner Average
                  inv = double( image( x:x + 1, y - 1:y ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              elseif x > 1 && y == height && x < width % Bottom of the image Average
                  inv = double( image( x - 1:x + 1, y - 1:y ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              else
                  inv = double( image( x - 1:x + 1, y - 1:y + 1 ) );
                  sumInv = ( sumInv + ( inv( : ) - centers( 1, thisK ) ) ).^2;
              end
              
              tempDifferenceArray( 1, thisK ) = sum( sumInv );
          end
          
          [ minNumber, index ] = min( tempDifferenceArray);
           
          ClusImg(x,y)=index;
    end
 end 
 
 clusterSums = double(zeros( 1, k )); 
 kAverage =double( zeros( 1, k ));
 
 for thisK=1:k
     [ xx,yy ] = find( ClusImg == thisK );
     for num = 1:size(xx,1)
         indexX = double( xx( num ) );
         indexY = double( yy( num ) );
         intensity = image( indexX, indexY );
         clusterSums(1,thisK) = clusterSums(1,thisK) +double( intensity);
     end
     
     kAverage( 1, thisK ) = double( clusterSums( 1, thisK )/ size(xx,1) );
 end
    
    previousCenters = centers;
    
    for thisK = 1:k
        if kAverage( 1, thisK ) == 0
            kAverage( 1, thisK ) = randperm( image( height, width ), k );
        end
    end
    
    centers = kAverage
    
    figure(1),imshow(ClusImg,[]); %pause(0.2)
    
    
    iterations = iterations + 1;
    
end 

figure,imshow(ClusImg,[]);