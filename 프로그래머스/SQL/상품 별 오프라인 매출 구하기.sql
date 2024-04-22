# 상품코드 별 매출액(판매가 * 판매량) 합계를 출력
SELECT 
    pr.PRODUCT_CODE, sum(pr.PRICE * os.SALES_AMOUNT) as SALES
# PRODUCT 테이블과 OFFLINE_SALE 테이블에서 
from 
    PRODUCT pr, OFFLINE_SALE os
where 
    pr.PRODUCT_ID = os.PRODUCT_ID   
# 상품코드 별 
group by pr.PRODUCT_CODE

# 결과는 매출액을 기준으로 내림차순 정렬해주시고 매출액이 같다면 상품코드를 기준으로 오름차순 정렬해주세요.
order by 
    SALES desc ,PRODUCT_CODE asc


