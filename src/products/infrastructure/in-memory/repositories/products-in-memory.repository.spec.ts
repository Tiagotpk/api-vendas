import { NotFoundError } from "@/common/domain/errors/not-found-error"
import { ProductsInMemoryRepository } from "./products-in-memory.repository"

describe('ProductsInMemoryRepository unit tests', () => {
    let sut: ProductsInMemoryRepository

    beforeEach(() => {
        sut = new ProductsInMemoryRepository()
    })

    describe('findByName', () => {
        it('should throw error when product not found', async () => {
            await expect(() => sut.findByName('fake_name')).rejects.toThrow(
                new NotFoundError('Product with name fake_name not found'),  
            )
            await expect(() => sut.findByName('fake_name')).rejects.toBeInstanceOf(NotFoundError)  
        })
    })
})