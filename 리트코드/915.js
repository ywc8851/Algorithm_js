var partitionDisjoint = function(nums) {
    const N=nums.length
    const max_left=new Array(N).fill(0)
    const min_right=new Array(N).fill(0)
    
    max_left[0]=nums[0]
    min_right[N-1]=nums[N-1]
    
    for(let i=1;i<N;i++) max_left[i]=Math.max(max_left[i-1], nums[i])
    
    for(let i=N-2;i>=0;i--) min_right[i]=Math.min(min_right[i+1],nums[i])
    
    for(let i=1;i<N;i++) if(max_left[i-1]<=min_right[i]) return i
}
