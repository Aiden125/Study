package jpabook.jpashop.service;

import jpabook.jpashop.domain.*;
import jpabook.jpashop.domain.item.Book;
import jpabook.jpashop.domain.item.Item;
import jpabook.jpashop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    @Transactional
    public void saveItem(Item item) {
        itemRepository.save(item);
    }

    /**
     * 변경 감지를 통한 업데이트 방법
     */
    @Transactional
    public void updateItem(Long itemId, String name, int price, int stockQuantity) {
        // 차라리 이렇게 업데이트 할 것들을 하나씩 넘기는게 명확하고 데이터가 많으면 dto를 만들자.

        // 아래처럼 item을 가져오면 얘는 영속 상태이며, 과정이 끝나서
        // 스프링에 의해 커밋이 되고 커밋이 되면 JPA가 바뀐걸 감지해서
        // 알아서 업데이트 해버린다.
        Item findItem = itemRepository.findOne(itemId);
        findItem.setName(name);
        findItem.setPrice(price);
        findItem.setStockQuantity(stockQuantity);
//        findItem.setPrice(bookparam.getPrice());
//        findItem.setName(bookparam.getName());
//        findItem.setStockQuantity(bookparam.getStockQuantity());

        // 실제로는 이런식으로 의미있는 메서드를 써야하고 set을 쓰지않는다
        // set을 쓰지않고 엔티티를 통한 설계를 해야한다.(그래야 변경점 추적이 가능)
//        ★★★findItem.change(price, name, stockQuantity);
//        return findItem; 리턴 안해도 업데이트가 날라간것

    }

    public List<Item> findItems() {
        return itemRepository.findAll();
    }

    public Item findOne(Long itemId) {
        return itemRepository.findOne(itemId);
    }


}
