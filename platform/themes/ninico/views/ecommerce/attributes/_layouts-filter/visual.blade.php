@if (($attributes = $attributes->where('attribute_set_id', $set->id)) && $attributes->isNotEmpty())
    <div class="bb-product-filter-attribute-item">
        <h4 class="bb-product-filter-title">{{ $set->title }}</h4>

        <div class="bb-product-filter-content">
            <div>
                @foreach($attributes as $attribute)
                    <div class="form-check">
                        <input class="form-check-input" style="{{ $attribute->getAttributeStyle() }}" type="checkbox" id="{{ $set->slug }}-filter-{{ $attribute->id }}" name="attributes[{{ $set->slug }}][]" value="{{ $attribute->id }}" @checked(in_array($attribute->id, $selected))>
                        <label class="form-check-label" for="{{ $set->slug }}-filter-{{ $attribute->id }}">
                            {{ $attribute->title }}
                        </label>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endif
