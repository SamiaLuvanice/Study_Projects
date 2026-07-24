from pydantic import BaseModel, Field

class UserRegisterValidator(BaseModel):
    user_name: str = Field(..., min_length=3)
    age: int = Field(..., gt=0)
    email: str = Field(..., email=True)
    uf: str = Field(..., max_length=2)