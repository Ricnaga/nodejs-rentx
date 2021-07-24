export type ICreateRentalDTO = {
    user_id: string;
    car_id: string;
    expect_return_date: Date;
    id?: string;
    end_date?: Date;
    total?: number;
};
