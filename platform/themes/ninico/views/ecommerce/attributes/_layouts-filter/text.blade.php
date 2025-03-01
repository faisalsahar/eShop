@if (($attributes = $attributes->where('attribute_set_id', $set->id)) && $attributes->isNotEmpty())
    <div class="bb-product-filter-attribute-item">
        <h4 class="bb-product-filter-title">{{ $set->title }}</h4>

        <div class="bb-product-filter-content">
            <ul class="text-swatch">
                @foreach($attributes as $attribute)
                    <li>
                        <label>
                            <input class="product-filter-item" type="checkbox" name="attributes[{{ $set->slug }}][]" value="{{ $attribute->id }}" @checked(in_array($attribute->id, $selected))>
                            <span>{{ $attribute->title }}</span>
                        </label>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
@endif
